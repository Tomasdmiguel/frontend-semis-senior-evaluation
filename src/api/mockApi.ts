import {
  ApiError,
  type CreateIncidentInput,
  type Crew,
  type Incident,
  type IncidentFilters,
  type IncidentListResponse,
  type IncidentStatus,
  type Priority,
  type UpdateIncidentInput,
} from "../contracts/api";
import { seedCrews, seedIncidents } from "../mocks/seed";

let incidents = structuredClone(seedIncidents);
let latencyMs = 350;
let failNextRequest = false;

const transitions: Record<IncidentStatus, IncidentStatus[]> = {
  open: ["assigned"],
  assigned: ["open", "in_progress"],
  in_progress: ["assigned", "resolved"],
  resolved: [],
};
const priorityWeight: Record<Priority, number> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

async function waitForRequest(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, latencyMs));
  if (failNextRequest) {
    failNextRequest = false;
    throw new ApiError(503, {
      code: "SIMULATED_FAILURE",
      message: "Falla temporal simulada. Reintentá.",
    });
  }
}

async function respond<T>(value: T): Promise<T> {
  await waitForRequest();
  return structuredClone(value);
}

export const mockControls = {
  setLatency(ms: number) {
    latencyMs = Math.max(0, ms);
  },
  failNext() {
    failNextRequest = true;
  },
  reset() {
    incidents = structuredClone(seedIncidents);
    latencyMs = 350;
    failNextRequest = false;
  },
};

export const incidentApi = {
  async list(filters: IncidentFilters = {}): Promise<IncidentListResponse> {
    const term = filters.search?.trim().toLocaleLowerCase("es");
    const data = incidents.filter(
      (incident) =>
        (!term ||
          `${incident.title} ${incident.description} ${incident.address}`
            .toLocaleLowerCase("es")
            .includes(term)) &&
        (!filters.status || incident.status === filters.status) &&
        (!filters.priority || incident.priority === filters.priority) &&
        (!filters.neighborhood ||
          incident.neighborhood === filters.neighborhood),
    );
    const direction = filters.direction === "asc" ? 1 : -1;
    data.sort((a, b) =>
      filters.sort === "priority"
        ? (priorityWeight[a.priority] - priorityWeight[b.priority]) * direction
        : (Date.parse(a.updatedAt) - Date.parse(b.updatedAt)) * direction,
    );
    return respond({ data, total: data.length });
  },
  async get(id: string): Promise<Incident> {
    const incident = incidents.find((item) => item.id === id);
    if (!incident)
      throw new ApiError(404, {
        code: "NOT_FOUND",
        message: "Incidente inexistente.",
      });
    return respond(incident);
  },
  async crews(): Promise<Crew[]> {
    return respond(seedCrews);
  },
  async create(input: CreateIncidentInput): Promise<Incident> {
    await waitForRequest();
    if (input.title.trim().length < 5) {
      throw new ApiError(422, {
        code: "VALIDATION_ERROR",
        message: "Datos inválidos.",
        fieldErrors: { title: "Mínimo 5 caracteres." },
      });
    }
    const now = new Date().toISOString();
    const incident: Incident = {
      ...input,
      id: `inc-${crypto.randomUUID()}`,
      status: "open",
      assignedCrewId: null,
      createdAt: now,
      updatedAt: now,
      history: [
        { id: crypto.randomUUID(), at: now, description: "Incidente creado" },
      ],
    };
    incidents = [incident, ...incidents];
    return structuredClone(incident);
  },
  async update(id: string, input: UpdateIncidentInput): Promise<Incident> {
    await waitForRequest();
    const index = incidents.findIndex((item) => item.id === id);
    if (index < 0)
      throw new ApiError(404, {
        code: "NOT_FOUND",
        message: "Incidente inexistente.",
      });
    const current = incidents[index];
    if (
      input.status &&
      input.status !== current.status &&
      !transitions[current.status].includes(input.status)
    ) {
      throw new ApiError(409, {
        code: "INVALID_TRANSITION",
        message: `No se puede pasar de ${current.status} a ${input.status}.`,
      });
    }
    const now = new Date().toISOString();
    const updated: Incident = {
      ...current,
      ...input,
      updatedAt: now,
      history: [
        ...current.history,
        {
          id: crypto.randomUUID(),
          at: now,
          description: "Incidente actualizado",
        },
      ],
    };
    incidents[index] = updated;
    return structuredClone(updated);
  },
};

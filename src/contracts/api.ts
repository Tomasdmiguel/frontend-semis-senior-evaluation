export const INCIDENT_STATUSES = ['open', 'assigned', 'in_progress', 'resolved'] as const
export const PRIORITIES = ['low', 'medium', 'high', 'critical'] as const
export const CATEGORIES = ['lighting', 'water', 'trees', 'signage'] as const

export type IncidentStatus = (typeof INCIDENT_STATUSES)[number]
export type Priority = (typeof PRIORITIES)[number]
export type Category = (typeof CATEGORIES)[number]

export interface Crew {
  id: string
  name: string
  specialties: Category[]
  available: boolean
}

export interface IncidentEvent {
  id: string
  at: string
  description: string
}

export interface Incident {
  id: string
  title: string
  description: string
  category: Category
  priority: Priority
  status: IncidentStatus
  neighborhood: string
  address: string
  contact?: string
  slaHours: number
  assignedCrewId: string | null
  createdAt: string
  updatedAt: string
  history: IncidentEvent[]
}

export interface IncidentFilters {
  search?: string
  status?: IncidentStatus
  priority?: Priority
  neighborhood?: string
  sort?: 'priority' | 'updatedAt'
  direction?: 'asc' | 'desc'
}

export interface IncidentListResponse {
  data: Incident[]
  total: number
}

export type CreateIncidentInput = Pick<
  Incident,
  'title' | 'description' | 'category' | 'priority' | 'neighborhood' | 'address' | 'slaHours'
> & { contact?: string }

export interface UpdateIncidentInput {
  status?: IncidentStatus
  assignedCrewId?: string | null
}

export interface ApiErrorBody {
  code: 'NOT_FOUND' | 'VALIDATION_ERROR' | 'INVALID_TRANSITION' | 'SIMULATED_FAILURE'
  message: string
  fieldErrors?: Record<string, string>
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: ApiErrorBody,
  ) {
    super(body.message)
    this.name = 'ApiError'
  }
}

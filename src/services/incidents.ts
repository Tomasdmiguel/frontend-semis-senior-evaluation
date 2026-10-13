import { incidentApi } from "../api/mockApi";
import { IncidentFilters } from "../contracts/api";

export const getIncidents = (filters: IncidentFilters) => {
  const res = incidentApi.list(filters);
  console.log(res);
  return res;
};

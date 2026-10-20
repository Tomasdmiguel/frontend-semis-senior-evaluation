import { createFileRoute } from "@tanstack/react-router";
import Table from "../components/Table";
import { useQuery } from "@tanstack/react-query";
import { getIncidents } from "../services/incidents";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery({
    queryKey: ["listIncident"],
    queryFn: () => getIncidents({}),
  });

  const columns = [
    {
      label: "Name",
    },
    { label: "Category" },
    { label: "Priority" },
    { label: "Status" },
    { label: "Actions" },
  ];

  return (
    <div>
      <Table columns={columns} data={data?.data ?? []} />
    </div>
  );
}

export default RouteComponent;

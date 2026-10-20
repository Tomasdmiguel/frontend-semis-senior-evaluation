import { Incident } from "../contracts/api";

type TableProps = {
  columns: { label: string }[];
  data: Incident[];
};
const Table = ({ columns, data }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns?.map((column) => (
            <th scope="col" key={column?.label}>
              {column?.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((incident) => (
          <tr key={incident?.id}>
            <td>{incident?.title}</td>
            <td>{incident?.category}</td>
            <td>{incident?.priority}</td>
            <td>{incident?.status}</td>
            <td>
              <button>supuesta acciones</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

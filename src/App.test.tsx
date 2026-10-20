import { render, screen } from "@testing-library/react";
import RouteComponent from "./routes";
describe("starter", () => {
  it("identifica la aplicación y aclara que falta implementar la solución", () => {
    render(<RouteComponent />);
    expect(
      screen.getByRole("heading", { level: 1, name: "OpsBoard" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /la solución empieza acá/i }),
    ).toBeInTheDocument();
  });
});

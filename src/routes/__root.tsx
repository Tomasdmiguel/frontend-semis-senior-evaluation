import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const RootLayout = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <TanStackRouterDevtools />
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });

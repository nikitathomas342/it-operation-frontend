import { RouteObject } from "react-router-dom";
import { CreateTransactionForm, NavigationBar, Table } from "../components";

export const browserRouterConfig: RouteObject[] = [
  { path: "/", element: <NavigationBar /> },
  {
    path: "/form",
    element: <CreateTransactionForm />,
  },
  {
    path: "/all",
    element: <Table />,
  },
  {
    path: "/boonterm",
    element: <Table />,
  },
  {
    path: "/bewallet",
    element: <Table />,
  },
  {
    path: "/cenpay",
    element: <Table />,
  },
  {
    path: "/partner",
    element: <Table />,
  },
];

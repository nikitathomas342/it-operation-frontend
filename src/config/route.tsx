import { CreateTransactionForm, Table } from "../components";

export const browserRouterConfig = [
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

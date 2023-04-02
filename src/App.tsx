import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTransactionForm, NavigationBar, Table } from "./components";

export const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/form" element={<CreateTransactionForm />} />
      <Route path="/all" element={<Table />} />
      <Route path="/boonterm" element={<Table />} />
      <Route path="/bewallet" element={<Table />} />
      <Route path="/cenpay" element={<Table />} />
      <Route path="/partner" element={<Table />} />
    </Routes>
  </BrowserRouter>
);

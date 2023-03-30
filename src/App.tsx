import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavigationBar } from "./components";
import { browserRouterConfig } from "./config";

const router = createBrowserRouter(browserRouterConfig);

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

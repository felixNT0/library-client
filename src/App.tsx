import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import allRoutes from "./routes/routes";

const router = createBrowserRouter(allRoutes as any);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

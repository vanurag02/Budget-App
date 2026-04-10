import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/", // PATH TELL WHERE TO LOOK AT
    element: <Dashboard />, // ELEMENT TO BE SHOWN AT ABOVE PATH
    loader: dashboardLoader, // LOADER LOADS THE DATA BEFORE RENDERING
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/", // PATH TELL WHERE TO LOOK AT
    element: <Dashboard />, // ELEMENT TO BE SHOWN AT ABOVE PATH
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

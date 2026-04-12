import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// PAGES
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// LAYOUTS
import Main, { mainLoader } from "./layouts/Main";

// ACTIONS
import { logoutAction } from "./actions/logout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     loader: mainLoader,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true, // PATH TELL WHERE TO LOOK AT
//         element: <Dashboard />, // ELEMENT TO BE SHOWN AT ABOVE PATH
//         loader: dashboardLoader, // LOADER LOADS THE DATA BEFORE RENDERING
//         errorElement: <Error />,
//       },
//       {
//         path: "logout",
//         element: logoutAction,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/", // PATH TELL WHERE TO LOOK AT
    element: <Main />, // ELEMENT TO BE SHOWN AT ABOVE PATH
    loader: mainLoader, // LOADER LOADS THE DATA BEFORE RENDERING
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
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

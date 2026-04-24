import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// TOASTIFY
import { ToastContainer, toast } from "react-toastify";

// PAGES
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

// LAYOUTS
import Main, { mainLoader } from "./layouts/Main";

// ACTIONS
import { logoutAction } from "./actions/logout";

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
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
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

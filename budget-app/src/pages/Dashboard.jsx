import React from "react";

import { useLoaderData } from "react-router-dom";
// HELPER FUNCTION IMPORT
import { createBudget, fetchData } from "../helpers";

// COMPONENTS IMPORT
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import { toast } from "react-toastify";

// LOADER FUNCTION
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// ACTION FUNCTION
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // NEW USER SUBMISSION
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch (err) {
      throw new Error("There is a problem in creating your account.");
    }
  }

  // NEW BUDGET
  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });

      return toast.success("Budget created");
    } catch (e) {
      throw new Error("There was a problem in creating your budget.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;

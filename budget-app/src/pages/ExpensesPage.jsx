import React from "react";
import { useLoaderData } from "react-router-dom";

// HELPERS
import { fetchData } from "../helpers";

// COMPONENTS
import Table from "../components/Table";

// LOADER FUNCTION
export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>(Total {expenses.length})</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses</p>
      )}
    </div>
  );
};

export default ExpensesPage;

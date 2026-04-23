import React from "react";
import { useLoaderData } from "react-router-dom";

// HELPERS
import { deleteItem, fetchData } from "../helpers";

// COMPONENTS
import Table from "../components/Table";

// TOASTIFY
import { toast } from "react-toastify";

// LOADER FUNCTION
export async function expensesLoader() {
  const expenses = await fetchData("expenses");
  return { expenses };
}

// ACTION
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // DELETE EXPENSE
  if (_action === "deleteExpense") {
    try {
      // DELETE AN EXPENSE
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });

      return toast.success(`Expense deleted`);
    } catch (e) {
      throw new Error("There was a problem in deleting your expense.");
    }
  }
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

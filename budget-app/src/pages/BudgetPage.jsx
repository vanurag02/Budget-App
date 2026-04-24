import React from "react";

import { useLoaderData } from "react-router-dom";

// COMPONENTS IMPORT
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

// HELPERS
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers";

// TOASTIFY
import { toast } from "react-toastify";

// LOADER FUNCTION
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you're looking for doesn't exist");
  }

  return { budget, expenses };
}

// ACTION
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // NEW EXPENSE
  if (_action === "createExpense") {
    try {
      // CREATE AN EXPENSE
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });

      return toast.success(`Expense ${values.newExpense} added`);
    } catch (e) {
      throw new Error("There was a problem in adding your expense.");
    }
  }

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

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};

export default BudgetPage;

import { redirect } from "react-router-dom";

// HELPERS IMPORT
import { deleteItem, getAllMatchingItems } from "../helpers";

// TOASTIFY
import { toast } from "react-toastify";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully");
  } catch (e) {
    throw new Error("There was a problem in deleting your budget");
  }

  return redirect("/");
}

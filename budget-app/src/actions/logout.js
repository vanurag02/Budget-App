import { redirect } from "react-router-dom";
// HELPERS
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
  //   DELETE USER
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "budgets",
  });
  deleteItem({
    key: "expenses",
  });
  toast.success("Account deleted successfully");
  //  RETURN REDIRECT
  return redirect("/");
}

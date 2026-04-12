import { redirect } from "react-router-dom";
// HELPERS
import { deleteItem } from "../helpers";

export async function logoutAction() {
  //   DELETE USER
  deleteItem({
    key: "userName",
  });
  //  RETURN REDIRECT
  return redirect("/");
}

import React from "react";

import { useLoaderData } from "react-router-dom";
// HELPER FUNCTION IMPORT
import { fetchData } from "../helpers";

// COMPONENTS IMPORT
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// LOADER FUNCTION
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// ACTION FUNCTION
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome ${formData.userName}`);
  } catch (err) {
    throw new Error("There is a problem in creating your account");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;

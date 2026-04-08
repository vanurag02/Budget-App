import React from "react";

// REACT ROUTER DOM IMPORTS
import { useLoaderData } from "react-router-dom";

// HERLPERS
import { fetchData } from "../helpers";

// LOADER FUNCTION
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData(); // GETTING THE userName FROM ABOVE dashboardLoader() LOADER FUNCTION
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
// COMPONENTS IMPORT
import Nav from "../components/Nav";

// ASSETS (IMAGES) IMPORT
import wave from "../assets/wave.svg";

// HELPER FUNCTION IMPORT
import { fetchData } from "../helpers";

// LOADER FUNCTION
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;

/*
THE <Outlet /> COMPONENT IS A PLACEHOLDER USED WITHIN A PARENT ROUTE TO INDICATE WHERE ITS CHILD ROUTE ELEMENTS SHOULD BE RENDERED

*/

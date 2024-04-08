import React from "react";

import Button from "../utils/Button";
import Main from "./Main";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Card from "./Card";
import StickyButton from "../utils/StickyButton";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

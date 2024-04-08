import React from "react";
import Button from "../utils/Button";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="px-44 pt-5 pb-2 shadow-lg">
      <div className="flex justify-between items-center pb-4">
        <div className="flex justify-center items-center gap-3 ">
          <h1 className="font-medium text-xl text-slate-700 ">
            Admin Management
          </h1>
          <p className="text-slate-400 text-sm">1/1 seats occupied</p>
        </div>
        <Button type="primary" disabled={false}>
          + New User
        </Button>
      </div>
      <div className="flex justify-start items-center gap-3">
        <ul className="flex justify-start gap-5 items-center">
          <li>
            <NavLink
              to="/account/allpeople"
              className={({ isActive }) => (isActive ? "nav-link" : "")}
            >
              All People
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/groups"
              className={({ isActive }) => (isActive ? "nav-link" : "")}
            >
              Groups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/managedevents"
              className={({ isActive }) => (isActive ? "nav-link" : "")}
            >
              Managed events
            </NavLink>
          </li>
        </ul>
        <Button type="tertiary" disabled={true}>
          Beta
        </Button>
      </div>
    </div>
  );
}

export default Main;

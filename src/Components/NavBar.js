import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navigate = useNavigate();

  const [isIconVisible, setIsIconVisible] = useState(false);

  const handleAccountChange = (event) => {
    const selectedOptionValue = event.target.value;
    setIsIconVisible(selectedOptionValue !== "/account");
    navigate(event.target.value);
  };

  return (
    <nav className="flex justify-between items-center h-30 border-b-2 border-slate-200 capitalize text px-44 text-slate-500 ">
      <img src="LogoC.png" alt="logo" />
      <ul className="flex justify-center items-center gap-5">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "nav-link" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/availability"
            className={({ isActive }) => (isActive ? "nav-link" : "")}
          >
            Availability
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/integration"
            className={({ isActive }) => (isActive ? "nav-link" : "")}
          >
            Integrations
          </NavLink>
        </li>
        <li>
          <select onClick={handleAccountChange}>
            <option value="/helppage">Help</option>
          </select>
        </li>

        <li>
          {!isIconVisible && (
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-3xl align-middle border-4 text-stone-500 rounded-full"
            />
          )}
          <select onClick={handleAccountChange}>
            <option value="/account"> Account</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import "./Components.css";
import { NavLink } from "react-router-dom";
import cccLogo from "../Images/CCC_logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
          <img src={cccLogo} alt="logo" />
          <span id="name">Cloud Computing Cell</span>
      </div>
      <div>
        <NavLink className="menu" to={"/"}>Home</NavLink>
        <NavLink className="menu" to={"/Activity"}>Activities</NavLink>

        <NavLink className="menu" to={"/Team"}>Team</NavLink>

        <NavLink className="menu">Contact Us</NavLink>

        <NavLink className="menu">Register</NavLink>
      </div>
    </header>
  );
};

export default Navbar;

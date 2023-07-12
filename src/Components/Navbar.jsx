import React, { useState } from "react";
import MyModal from "../Components/Register";
import NewModal from "./Contact";
import "./Components.css";
import { NavLink } from "react-router-dom";
import cccLogo from "../Images/CCC_logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [pop, setPop] = useState(false);

  const closeModal = () => setShow(false);

  const closePop = () => setPop(false);

  return (
    <header>
      <div className="logo">
        <img src={cccLogo} alt="logo" />
        <span id="name">Cloud Computing Cell</span>
      </div>
      <div>
        <span className="nav-item">
          <NavLink className="menu" to={"/"}>
            Home
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink className="menu" to={"/Activity"}>
            Activities
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink className="menu" to={"/Team"}>
            Team
          </NavLink>
        </span>
        <span className="nav-item"> 
          <NavLink className="menu">
            <span onClick={() => setPop(true)}>Contact Us</span>
            {pop && <NewModal closeModal={closePop} />}
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink className="menu">
            <span onClick={() => setShow(true)}>Register</span>
            {show && <MyModal closeModal={closeModal} />}
          </NavLink>
        </span>
      </div>
    </header>
  );
};

export default Navbar;

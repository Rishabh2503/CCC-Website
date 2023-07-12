import React, { useState } from "react";
import NewModal from "./Contact";
import "./Components.css";
import { NavLink } from "react-router-dom";
import cccLogo from "../Images/CCC_logo.svg";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";

const Navbar = () => {
  const [pop, setPop] = useState(false);

  const closePop = () => setPop(false);

  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
            <span onClick={() => handleOpen("sm")}>Register</span>
            <Modal size={size} open={open} onClose={handleClose}>
              <Modal.Header>
                <Modal.Title id="header-text">STAY TUNED</Modal.Title>
              </Modal.Header>
              <Modal.Body id="body-text">
                For upcoming events that will be happening soon!
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} appearance="subtle">
                  Cancel
                </Button>
                <Button onClick={handleClose} appearance="primary">
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          </NavLink>
        </span>
      </div>
    </header>
  );
};

export default Navbar;

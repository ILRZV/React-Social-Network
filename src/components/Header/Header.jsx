import React from "react";
import logo from "../../images/Logo.PNG";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"></img>
    </header>
  );
}

export default Header;

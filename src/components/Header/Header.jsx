import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.PNG";
import classes from "./Header.module.css";
function Header(props) {
  console.log(props);
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"></img>
      <div className={classes.loginBlock}>
        {props.dataUser.isLogin ? (
          <span>{props.dataUser.email}</span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;

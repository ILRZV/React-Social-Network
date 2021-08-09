import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navigation}>
      <div className={`${classes.item} ${classes.first_item}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={classes.item}>
        <a href="/dialogs">Massages</a>
      </div>
      <div className={classes.item}>
        <a href="/news">News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;

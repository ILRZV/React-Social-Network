import React from "react";
import classes from "./ProfileNavigation.module.css";

function ProfileNavigation(props) {
  let friendsElements = props.friendsData.map((element) => (
    <img src={element.src}></img>
  ));
  return <div className={classes.profile_friends}>{friendsElements}</div>;
}

export default ProfileNavigation;

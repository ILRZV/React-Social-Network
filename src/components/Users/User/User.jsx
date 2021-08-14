import React from "react";
import classes from "./User.module.css";
import noPhotoAvatar from "../../../images/avatarWithoutPhoto.png";
function User(props) {
  let user = props.user;
  return (
    <div className={classes.container}>
      <div className={classes.followPlace}>
        <img src={noPhotoAvatar}></img>

        <button className={classes.personFollowButton}>
          followed{user.followed}
        </button>
      </div>
      <div>
        <div>{user.fullName}</div>
        <span>{user.status}</span>
        <div>
          <span>City: {user.location.city}</span>
          <span>Country: {user.location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default User;

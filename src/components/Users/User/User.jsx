import React from "react";
import classes from "./User.module.css";
import noPhotoAvatar from "../../../images/avatarWithoutPhoto.png";
import Button from "@material-ui/core/Button";

function User(props) {
  let user = props.user;
  return (
    <div className={classes.container}>
      <div className={classes.followPlace}>
        <img
          src={user.photos.small !== null ? user.photos.small : noPhotoAvatar}
          className={classes.avatar}
        ></img>
        {user.followed ? (
          <Button
            className={classes.personFollowButton}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.unFollowUser(user.id);
            }}
          >
            follow
          </Button>
        ) : (
          <Button
            className={classes.personFollowButton}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.followUser(user.id);
            }}
          >
            unfollow
          </Button>
        )}
      </div>
      <div>
        <div>{user.name}</div>
        <span>{user.status}</span>
        <div>
          <span>City: {"user.location.city"}</span>
          <span>Country: {"user.location.country"}</span>
        </div>
      </div>
    </div>
  );
}

export default User;

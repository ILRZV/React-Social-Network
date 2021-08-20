import React from "react";
import classes from "./User.module.css";
import noPhotoAvatar from "../../../images/avatarWithoutPhoto.png";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { deleteFollowUser, postFollowUser } from "../../../api/api";

function User(props) {
  let user = props.user;
  return (
    <div className={classes.container}>
      <div className={classes.followPlace}>
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small !== null ? user.photos.small : noPhotoAvatar}
            className={classes.avatar}
          ></img>
        </NavLink>
        {user.followed ? (
          <Button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            className={classes.personFollowButton}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.toggleFollowingProgress(true, user.id);
              deleteFollowUser(user.id).then((data) => {
                if (data.resultCode == 0) {
                  props.unFollowUser(user.id);
                }
                props.toggleFollowingProgress(false, user.id);
              });
            }}
          >
            unfollow
          </Button>
        ) : (
          <Button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            className={classes.personFollowButton}
            variant="outlined"
            color="primary"
            onClick={() => {
              props.toggleFollowingProgress(true, user.id);
              postFollowUser(user.id).then((data) => {
                if (data.resultCode == 0) {
                  props.followUser(user.id);
                }
                props.toggleFollowingProgress(false, user.id);
              });
            }}
          >
            follow
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

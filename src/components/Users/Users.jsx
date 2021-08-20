import React from "react";
import User from "./User/User";
import Button from "@material-ui/core/Button";
import classes from "./Users.module.css";

function Users(props) {
  let pagesCount =
    Math.floor((props.totalUsersCount - 0.01) / props.pageSize) + 1;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((element) => {
        return (
          <span
            className={
              element === props.currentPage ? classes.highlightPage : ""
            }
            onClick={() => {
              props.changePage(element);
              props.showUsers(element);
            }}
          >
            {element}
          </span>
        );
      })}

      {props.users.usersData.map((element) => (
        <User
          key={element.id}
          user={element}
          followUser={props.followUser}
          unFollowUser={props.unFollowUser}
          followingInProgress={props.followingInProgress}
          toggleFollowingProgress={props.toggleFollowingProgress}
        />
      ))}
      <Button onClick={props.showUsers} variant="contained" color="primary">
        More users
      </Button>
    </div>
  );
}

export default Users;

import * as axios from "axios";
import React from "react";
import User from "./User/User";
import Button from "@material-ui/core/Button";
import classes from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  showUsers = () => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  componentDidMount() {
    this.showUsers();
  }
  
  render() {
    let pagesCount =
      Math.floor((this.props.totalUsersCount - 0.01) / this.props.pageSize) + 1;

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
                element === this.props.currentPage && classes.highlightPage
              }
              onClick={() => this.props.changePage(element)}
            >
              {element}
            </span>
          );
        })}
        {this.props.users.usersData.map((element) => (
          <User
            key={element.id}
            user={element}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        ))}
        <Button onClick={this.showUsers} variant="contained" color="primary">
          More users
        </Button>
      </div>
    );
  }
}

export default Users;

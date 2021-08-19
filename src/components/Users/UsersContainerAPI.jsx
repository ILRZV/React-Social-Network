import * as axios from "axios";
import React from "react";
import User from "./User/User";
import Button from "@material-ui/core/Button";
import classes from "./Users.module.css";
import Users from "./Users";

class UsersContainerAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setCount(response.data.totalCount);
      });
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

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        changePage={this.props.changePage}
        showUsers={this.showUsers}
        users={this.props.users}
        followUser={this.props.followUser}
        unFollowUser={this.props.unFollowUser}
      />
    );
  }
}

export default UsersContainerAPI;

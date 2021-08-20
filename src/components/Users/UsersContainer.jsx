import { connect } from "react-redux";
import {
  followUser,
  unFollowUser,
  setUsers,
  changePage,
  setUsersCount,
  changeLoading,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getUsers } from "../../api/api";

class UsersContainerAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setUsersCount(data.totalCount);
    });
  }
  showUsers = (pageNum) => {
    this.props.changeLoading();
    getUsers(pageNum, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <CircularProgress />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changePage={this.props.changePage}
            showUsers={this.showUsers}
            users={this.props.users}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
            isLoading={this.props.isLoading}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersData,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isLoading: state.usersData.isLoading,
    followingInProgress: state.usersData.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  changePage,
  setUsersCount,
  changeLoading,
  toggleFollowingProgress,
})(UsersContainerAPI);

export default UsersContainer;

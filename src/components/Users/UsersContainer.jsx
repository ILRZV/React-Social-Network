import { connect } from "react-redux";
import {
  followUserRequest,
  unFollowUserRequest,
  newUsersRequest,
  changePageRequest,
  setUsersCountRequest,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import React from "react";
import LinearProgress from "@material-ui/core/CircularProgress";

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
      <>
        <LinearProgress />
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
      </>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersData,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => {
      dispatch(followUserRequest(id));
    },
    unFollowUser: (id) => {
      dispatch(unFollowUserRequest(id));
    },
    setUsers: (users) => {
      dispatch(newUsersRequest(users));
    },
    changePage: (page) => {
      dispatch(changePageRequest(page));
    },
    setCount: (count) => {
      dispatch(setUsersCountRequest(count));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainerAPI);

export default UsersContainer;

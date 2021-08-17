import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserRequest,
  unFollowUserRequest,
  newUsersRequest,
  changePageRequest,
} from "../../redux/usersReducer";

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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

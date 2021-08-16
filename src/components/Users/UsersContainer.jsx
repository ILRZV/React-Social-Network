import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserRequest,
  unFollowUserRequest,
  newUsersRequest,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersData,
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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

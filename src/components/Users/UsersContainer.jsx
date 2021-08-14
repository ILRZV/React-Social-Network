import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserRequest,
  unFollowUserRequest,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => dispatch(followUserRequest(id)),
    unFollowUser: (id) => dispatch(unFollowUserRequest(id)),
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

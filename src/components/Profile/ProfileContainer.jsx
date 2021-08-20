import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setNewUser } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainerAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userID}`
      )
      .then((response) => {
        this.props.setNewUser(response.data);
      });
  }
  render() {
    return <Profile data={this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profileData.user,
  };
};

let profileWithURLData = withRouter(ProfileContainerAPI);
const ProfileContainer = connect(mapStateToProps, { setNewUser })(
  profileWithURLData
);

export default ProfileContainer;

import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData } from "../../redux/authReducer";
import { getAuthMe } from "../../api/api";

class HeaderComponentAPI extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    getAuthMe().then((data) => {
      let { email, id, login } = data;
      this.props.setUserData(id, email, login);
    });
  }
  render() {
    return <Header dataUser={this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.authData.login,
    email: state.authData.email,
    userId: state.authData.userId,
    isLogin: state.authData.isLogin,
  };
};
let HeaderComponent = connect(mapStateToProps, { setUserData })(
  HeaderComponentAPI
);
export default HeaderComponent;

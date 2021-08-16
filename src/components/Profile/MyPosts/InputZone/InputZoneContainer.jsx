import InputZone from "./InputZone";

import {
  addPostRequest,
  inputPostRequest,
} from "../../../../redux/profileReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profileData.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (date) => {
      dispatch(addPostRequest(date));
    },
    changeInput: (text) => {
      dispatch(inputPostRequest(text));
    },
  };
};
const InputZoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputZone);

export default InputZoneContainer;

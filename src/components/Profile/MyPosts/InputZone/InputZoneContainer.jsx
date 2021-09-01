import InputZone from "./InputZone";

import { addPost, inputPost } from "../../../../redux/profileReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profileData.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (date) => {
      dispatch(addPost(date));
    },
    changeInput: (text) => {
      dispatch(inputPost(text));
    },
  };
};
const InputZoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputZone);

export default InputZoneContainer;

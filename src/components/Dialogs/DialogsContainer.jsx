import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageRequest,
  inputMessageRequest,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    inputMessage: (text) => {
      dispatch(inputMessageRequest(text));
    },
    addMessage: (text) => {
      dispatch(addMessageRequest());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

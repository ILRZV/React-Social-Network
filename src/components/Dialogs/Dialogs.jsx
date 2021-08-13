import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  addMessageRequest,
  inputMessageRequest,
} from "../../redux/dialogsReduser";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogData.map((element) => (
    <Dialog id={element.id} name={element.name} />
  ));
  let messagesElements = props.state.messagesData.map((element) => (
    <Message id={element.id} message={element.message} />
  ));
  let textAreaMessageRef = React.createRef();

  let handleMessageChange = () => {
    props.dispatch(inputMessageRequest(textAreaMessageRef.current.value));
  };
  let handleMessageSend = () => {
    props.dispatch(addMessageRequest());
    textAreaMessageRef.current.value = "";
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.message}>
        {messagesElements}
        <div>
          <textarea
            value={props.state.input}
            onChange={handleMessageChange}
            ref={textAreaMessageRef}
            placeholder="Enter your message"
          ></textarea>
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

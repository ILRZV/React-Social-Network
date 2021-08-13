import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  addMessageRequest,
  inputMessageRequest,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.dialogData.map((element) => (
    <Dialog id={element.id} name={element.name} />
  ));
  let messagesElements = props.dialogsData.messagesData.map((element) => (
    <Message id={element.id} message={element.message} />
  ));
  let textAreaMessageRef = React.createRef();

  let handleMessageChange = () => {
    props.inputMessage(textAreaMessageRef.current.value);
  };
  let handleMessageSend = () => {
    props.addMessage();
    textAreaMessageRef.current.value = "";
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.message}>
        {messagesElements}
        <div>
          <textarea
            value={props.dialogsData.input}
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

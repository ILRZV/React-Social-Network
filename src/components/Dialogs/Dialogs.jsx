import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogData.map((element) => (
    <Dialog id={element.id} name={element.name} />
  ));

  let messagesElements = props.state.messagesData.map((element) => (
    <Message id={element.id} message={element.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.message}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;

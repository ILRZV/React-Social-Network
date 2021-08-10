import React from "react";
import s from "./Message.module.css";

function Message(props) {
  console.log(props);
  return <div className={s.message}>{props.message}</div>;
}

export default Message;

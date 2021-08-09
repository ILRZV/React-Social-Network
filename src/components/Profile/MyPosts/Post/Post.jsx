import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  debugger;
  return (
    <div className={classes.item}>
      <img src="https://icdn.lenta.ru/images/2016/02/09/16/20160209165528498/pic_deaa7637bb70fb032b4e87f636b5aea2.jpg" />
      {props.message}
      <p>Like</p>
    </div>
  );
}

export default Post;

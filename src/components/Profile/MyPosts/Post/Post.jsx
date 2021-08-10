import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../images/Girl.jpg";

function Post(props) {
  return (
    <div className={classes.item}>
      <img src={avatar} />
      <p>{props.message}</p>
      <p>Like {props.likeCounter}</p>
    </div>
  );
}

export default Post;

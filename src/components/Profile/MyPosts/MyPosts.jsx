import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

function MyPosts(props) {
  let postsElements = props.postsData.postsData.map((element) => (
    <Post message={element.message} likeCounter={element.likeCounter} />
  ));
  let newElementRef = React.createRef();
  let handleChangeInput = () => {
    props.inputChange(newElementRef.current.value);
    newElementRef.current.value = props.postsData.input;
  };
  let handleAddPost = () => {
    props.addPost(newElementRef.current.value);
  };
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.create_post_info}>
          <CreateIcon color="primary" className={classes.create_post} />
          <span>Create post</span>
        </div>
        <textarea
          value={props.postsData.input}
          ref={newElementRef}
          placeholder="what's new?"
          className={classes.text_area}
          onChange={handleChangeInput}
        ></textarea>
        <div className={classes.post_buttons}>
          <Button color="primary" onClick={handleAddPost}>
            Add post
          </Button>
          <Button color="primary">Clear</Button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
}

export default MyPosts;

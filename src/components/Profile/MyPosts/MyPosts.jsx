import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <div>my posts</div>
        <Post message="How are you&" likeCounter={20} />
        <Post message="The next post" likeCounter={45} S />
      </div>
    </div>
  );
}

export default MyPosts;

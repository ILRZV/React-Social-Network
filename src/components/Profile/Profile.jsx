import React, { useState, useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

function Profile(props) {
  let [state, setState] = useState("");
  useEffect(() => {
    console.log("object");
    return () => {
      console.log("delete");
    };
  });
  function newO(constructor, ...args) {
    let obj = {};
    obj.__proto__ = constructor;
    return constructor.apply(obj, args);
  }

  return (
    <div className={classes.profile_wrapper}>
      <ProfileHeader
        userProfile={props.data.userProfile}
        status={props.data.status}
      />
      <div className={classes.profile_content}>
        <ProfileNavigation />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

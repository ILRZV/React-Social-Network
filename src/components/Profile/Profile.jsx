import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

function Profile(props) {
  return (
    <div className={classes.profile_wrapper}>
      <ProfileHeader />
      <div className={classes.profile_content}>
        <ProfileNavigation />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

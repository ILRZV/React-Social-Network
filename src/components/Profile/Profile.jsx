import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

function Profile(props) {
  return (
    <div className={classes.profile_wrapper}>
      <ProfileHeader />
      <div className={classes.profile_content}>
        <ProfileNavigation friendsData={props.state.friendsData} />
        <MyPosts
          postsData={props.state}
          addPost={props.addPost}
          inputChange={props.inputChange}
        />
      </div>
    </div>
  );
}

export default Profile;

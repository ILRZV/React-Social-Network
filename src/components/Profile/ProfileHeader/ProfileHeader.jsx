import React from "react";
import classes from "./ProfileHeader.module.css";
import introImage from "../../../images/Mountaines.jpeg";
import avatar from "../../../images/Girl.jpg";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Divider from "@material-ui/core/Divider";

function ProfileHeader() {
  return (
    <div className={classes.container}>
      <img className={classes.head_img} src={introImage}></img>
      <div className={classes.header_info}>
        <img className={classes.avatar} src={avatar}></img>
        <div className={classes.info}>
          <span className={classes.name}>Martial Anna</span>
          <br />
          <span className={classes.mail}>polyester@gmail.com</span>
        </div>

        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add a friend
          </Button>
          <Button variant="contained" className={classes.button}>
            <MailOutlineIcon />
          </Button>
          <Button variant="contained" className={classes.button}>
            <MoreHorizIcon />
          </Button>
        </div>
      </div>
      <Divider></Divider>
      <div className={classes.navigation}>
        <a>About</a>
        <a>Membership</a>
        <a>Discussions</a>
        <a>Video</a>
        <a>Events</a>
        <a>Media</a>
      </div>
    </div>
  );
}

export default ProfileHeader;

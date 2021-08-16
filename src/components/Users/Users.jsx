import * as axios from "axios";
import React from "react";
import User from "./User/User";
import Button from "@material-ui/core/Button";

class Users extends React.Component {
  showUsers = () => {
    if (this.props.users.usersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.usersData.map((element) => (
          <User
            key={element.id}
            user={element}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        ))}
        <Button onClick={this.showUsers} variant="contained" color="primary">
          More users
        </Button>
      </div>
    );
  }
}

export default Users;

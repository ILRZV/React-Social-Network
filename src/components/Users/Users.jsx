import React from "react";
import User from "./User/User";

function Users(props) {
  console.log(props.usersData.usersData);
  let usersElements = props.usersData.usersData.map((element) => (
    <User key={element.id} user={element} />
  ));
  return <div>{usersElements}</div>;
}

export default Users;

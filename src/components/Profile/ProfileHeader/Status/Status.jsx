import React, { useState } from "react";
import { getUserStatus } from "../../../../api/api";

function Status(props) {
  let [status, setStatus] = useState(props.status);
  let [isModified, setIsModified] = useState(false);

  let inputChange = (event) => {
    setStatus(event.target.value);
  };
  let toggleModified = () => {
    setIsModified(!isModified);
  };
  return (
    <div>
      {isModified ? (
        <input
          autoFocus={true}
          value={status}
          onChange={inputChange}
          onBlur={toggleModified}
        ></input>
      ) : (
        <p onDoubleClick={toggleModified}>{status}</p>
      )}
    </div>
  );
}

export default Status;

import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user[0]) && user[0].pseudo}</h3>
        <p>Age : 35 ans</p>
        <p>Like
          {!isEmpty(user[0])
            ? user[0].likes > 1
              ? `s : ${user[0].likes}`
              : ` ${user[0].likes}`
            : " 0 "
          }
        </p>
      </div>
    </div>
  );
};

export default User;

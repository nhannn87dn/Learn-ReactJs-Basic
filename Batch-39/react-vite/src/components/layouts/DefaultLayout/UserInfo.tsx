import React from "react";
import { userContext } from "../../../contexts/userContext";

const UserInfo = () => {
  const user = React.useContext(userContext);
  return <div className="userInf">{user?.name}</div>;
};

export default UserInfo;

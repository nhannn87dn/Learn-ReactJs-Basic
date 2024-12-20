import React from "react";
import { userContext } from "../../context/userContext";
export default function UserInfo() {
  const userInfo = React.useContext(userContext);

  return <div>UserInfo: {userInfo?.name}</div>;
}

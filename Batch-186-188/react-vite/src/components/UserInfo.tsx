import { useContext } from "react";
import { userContext } from "../context/userContext";

const UserInfo = () => {
  const user = useContext(userContext);
  return <span>UserInfo {user?.name}</span>;
};

export default UserInfo;

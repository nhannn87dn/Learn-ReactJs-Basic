import { useContext } from "react";
import { userContext } from "../context/userContext";
const UserInfo = () => {
  const user = useContext(userContext);
  return <div>UserInfo: {user?.name}</div>;
};

export default UserInfo;

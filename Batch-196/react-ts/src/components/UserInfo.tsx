import { useContext } from "react";
import { userContext } from "../context/userContext";

const UserInfo = () => {
  const user = useContext(userContext);
  return <div>Name: {user?.name}</div>;
};

export default UserInfo;

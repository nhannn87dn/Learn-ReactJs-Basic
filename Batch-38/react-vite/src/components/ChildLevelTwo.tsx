import React, { useContext } from "react";
import { userContext } from "../context/userContext";

const ChildLevelTwo = () => {
  const user = useContext(userContext);
  return (
    <div>
      ChildLevelTwo
      <h2>{user.name}</h2>
    </div>
  );
};

export default ChildLevelTwo;

import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Level2 = () => {
  const userInfo = useContext(UserContext);
  return (
    <div>
      <h2>Level2</h2>
      {userInfo ? (
        <div>
          <p>ID: {userInfo.id}</p>
          <p>Name: {userInfo.name}</p>
        </div>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default Level2;

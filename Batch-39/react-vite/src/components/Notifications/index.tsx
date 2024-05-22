import React from "react";
import { FaBell } from "react-icons/fa";

const Notifications = () => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div
      onClick={() => {
        console.log("ok");
        setIsShow(!isShow);
      }}
    >
      <FaBell />
      {isShow && (
        <div className="notifications_list">
          <ul>
            <li>notifications 1</li>
            <li>notifications 2</li>
            <li>notifications 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;

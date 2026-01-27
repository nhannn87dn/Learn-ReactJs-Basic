import { Bell } from "lucide-react";

const UINotifications = () => {
  console.log("Render UINotifications");
  const isShowNotification = true;
  return (
    <div className="notifications">
      <div className="icon">
        <Bell />
      </div>
      {isShowNotification && (
        <div className="notification_list">
          <ul>
            <li>Notification item 1</li>
            <li>Notification item 2</li>
            <li>Notification item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UINotifications;

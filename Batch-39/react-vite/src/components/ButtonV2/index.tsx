/*
Module css nó return một object
object: lấy tất cả class trong file .css là key: value
*/

import style from "./Button.module.css";

console.log("<<=== 🚀 style ===>>", style);

const ButtonV2 = ({
  label,
  icon,
  type = "btn_orange",
  onHandleV2, //đặt tên phải bắt đầu = on
}: {
  label: string;
  icon?: React.ReactNode;
  type?: string;
  onHandleV2: () => void;
}) => {
  return (
    <button
      onClick={onHandleV2}
      className={`${style.btn} ${style[type]}`}
    >
      {icon} {label}
    </button>
  );
};

export default ButtonV2;

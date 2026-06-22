import styles from "./Button.module.css";

//các sẽ sử dụng cú phép function để tạo component
/*
props = {
  type: "red", 
  label: "Thêm vào giỏ hàng", 
  icon: <ShoppingCart />
}
*/

function Button({
  type = "green",
  label,
  icon,
}: {
  type?: string; //tuỳ chọn
  label: string;
  icon: React.ReactNode; //type của component
}) {
  let buttonType = "";
  if (type === "red") {
    buttonType = styles.red;
  } else if (type === "orange") {
    buttonType = styles.orange;
  }
  return (
    <button className={`${styles.button} ${buttonType}`}>
      {icon} {label}
    </button>
  );
}

//Xuất ra để có thể sử dụng ở các file khác
export default Button;

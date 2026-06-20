import styles from "./Button.module.css";

//các sẽ sử dụng cú phép function để tạo component

function Button(props) {
  let buttonType = "";
  if (props.type === "red") {
    buttonType = styles.red;
  }
  if (props.type === "orange") {
    buttonType = styles.orange;
  }
  return (
    <button
      className={`${styles.button} ${buttonType}`}
      onClick={props.onClick}
    >
      {props.icon} {props.label}
    </button>
  );
}
//Xuất ra để có thể sử dụng ở các file khác
export default Button;

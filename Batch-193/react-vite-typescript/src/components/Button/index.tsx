/* nhúng css vào component */
///import "./Button.css";
//Sử dụng module css
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Button Default</button>;
}
/*
Xuất ra để dùng nơi khác
*/
export default Button;

//Cách import file css thường
//import "./Button.css";
import styles from "./Button.module.css";

console.log("<<=== 🚀 styles ===>>", styles);

function Button() {
  return <button className={styles["btn-primary"]}>Login</button>;
}
export default Button;

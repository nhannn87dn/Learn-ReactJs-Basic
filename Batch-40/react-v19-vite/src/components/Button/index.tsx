//Cách import file css thường
//import "./Button.css";
import styles from "./Button.module.css";

console.log("<<=== 🚀 styles ===>>", styles);
type TButton = {
  onHandler: () => void;
};
function Button({ onHandler }: TButton) {
  return (
    <button onClick={onHandler} className={styles["btn-primary"]}>
      Login
    </button>
  );
}
export default Button;

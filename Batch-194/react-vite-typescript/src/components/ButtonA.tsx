import styles from "./ButtonA.module.css";
function ButtonA() {
  console.log("<<=== 🚀 styles ===>>", styles);
  return <div className={styles.button}>ButtonA</div>;
}

export default ButtonA;

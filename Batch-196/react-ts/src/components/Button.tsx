//Component với Arrow Function và TypeScript
import styles from "./Button.module.css";

const Button = () => {
  console.log("<<=== 🚀 styles ===>>");
  return <button className={styles.button}>Button</button>;
};
export default Button;

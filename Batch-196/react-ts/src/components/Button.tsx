//Component với Arrow Function và TypeScript
import styles from "./Button.module.css";

/**
 *
 * props = {
 *  name: 'Login',
 *  icon: '1',
 * }
 *
 * @returns
 */
function Button(props: {
  name: string;
  icon: string;
  type?: "dark" | "light";
}) {
  console.log("<<=== 🚀 styles ===>>");
  console.log("<<=== 🚀 props ===>>", props);
  let className = ""; //màu cam
  if (props.type === "dark") {
    className = `${styles.button} ${styles.button_dark}`;
  } else {
    className = `${styles.button}`;
  }
  return (
    <button className={className}>
      {props.icon} {props.name}
    </button>
  );
}
export default Button;

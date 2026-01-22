import styles from "./ButtonPlay.module.css";
/**
const props = {
    label: "VTV 1"
}
const {label} = props;
 */

// Định nghĩa kiểu cho props
type ButtonProp = {
  label: string;
  bgColor: string;
};

const ButtonPlay = ({ label, bgColor }: ButtonProp) => {
  let classBg = "";
  if (bgColor === "red") {
    classBg = styles.bg_red;
  } else if (bgColor === "green") {
    classBg = styles.bg_green;
  } else if (bgColor === "blue") {
    classBg = styles.bg_blue;
  }
  return <button className={`${styles.button} ${classBg}`}>{label}</button>;
};

export default ButtonPlay;

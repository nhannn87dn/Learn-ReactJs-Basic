//import "./Button.css";
import styles from "./Button.module.css";
//=> Tất cả các class trong file Button.module.css
// được chuyển thành object

type TButton = {
  label: string;
  icon?: React.ReactNode; //Dấu ? Có thể không cần truyền icon
};

function Button({ label, icon }: TButton) {
  //console.log("<<=== 🚀 props ===>>", props);
  return (
    <button className={styles.btn}>
      {icon} {label}
    </button>
  );
}

Button.defaultProps = {
  label: "No name",
};

//Xuất ra để các component khác sử dụng với cú pháp import
export default Button;

// import "./Attributes.css";
import styles from "./Attributes.module.css";
/*
styles là một cái tên biến, bạn thể đổi tùy ý
*/
//console.log("<<=== 🚀 styles ===>>", styles);

type TAttItem = {
  label: string;
  isActive?: boolean;
};

const AttItem = ({ label, isActive = false }: TAttItem) => {
  const myClass =
    isActive === true
      ? `${styles.attr_item} ${styles.attr_item_actived}`
      : styles.attr_item;
  return <span className={myClass}>{label}</span>;
};

const Attributes = () => {
  return (
    <div className={styles.attrs_container}>
      <span className={styles.attr_label}>Màu Sắc</span>
      {/* <span className="attr_item attr_item_actived">Đen</span>
      <span className="attr_item">Hồng</span>
      <span className="attr_item">Xanh</span> */}
      <AttItem isActive={true} label="Đen" />
      <AttItem label="Hồng" />
      <AttItem label="Xanh" />
    </div>
  );
};

export default Attributes;

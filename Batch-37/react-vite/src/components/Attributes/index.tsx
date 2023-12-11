import styles from "./Attributes.module.css";

const Attributes = () => {
  return (
    <div className={styles.attr_container}>
      <div className={styles.attr_label}>Màu sắc</div>
      <div className={`${styles.attr_item} ${styles.actived}`}>Đen</div>
      <div className={styles.attr_item}>Hồng</div>
      <div className={styles.attr_item}>Xanh</div>
    </div>
  );
};

export default Attributes;

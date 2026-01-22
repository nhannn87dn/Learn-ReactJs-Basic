import styles from "./Attribue.module.css";

const AttrItem = ({ name }: { name: string }) => {
  return <span className={styles.attr}>{name}</span>;
};

const Attribute = () => {
  return (
    <div className={styles.attr_wrapper}>
      <span>Màu sắc:</span>
      <AttrItem name="Đen" />
      <AttrItem name="Hồng" />
      <AttrItem name="Xanh" />
      {/* <span className={styles.attr}>Đen</span>{" "}
      <span className={styles.attr}>Hồng</span>{" "}
      <span className={styles.attr}>Xanh</span> */}
    </div>
  );
};

export default Attribute;

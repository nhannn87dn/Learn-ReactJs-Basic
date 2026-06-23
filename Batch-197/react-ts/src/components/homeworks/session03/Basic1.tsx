import styles from "./Basic1.module.css";

type TAttrItem = {
  name: string;
};

const AttrItem = ({ name }: TAttrItem) => {
  return <span className={styles.item}>{name}</span>;
};

//rafce
const Basic1 = () => {
  return (
    <div className={styles.attrs}>
      <span className="label">Màu sắc</span>
      {/* <span className={`${styles.item} ${styles.active}`}>Đen</span>
      <span className={styles.item}>Hồng</span> */}
      <AttrItem name="Đen" />
      <AttrItem name="Hồng" />
      <AttrItem name="Xanh" />
    </div>
  );
};

export default Basic1;

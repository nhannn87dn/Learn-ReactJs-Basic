import styles from "./Attributes.module.css";

type TAttrProps = {
  label: string;
};
/*
const props = {label: 'Hong'};
const {label} = props; //destructuring
*/

const AttrItem = ({ label }: TAttrProps) => {
  return <span className={styles.value}>{label}</span>;
};

const Attributes = () => {
  return (
    <div className={styles.attrs}>
      <span className="label">Màu Sắc</span>
      {/* <span className={`${styles.value} ${styles.active}`}>Đen</span>
      <span className={styles.value}>Hồng</span>
      <span className={styles.value}>Xanh</span> */}
      <AttrItem label="Đen" />
      <AttrItem label="Hồng" />
      <AttrItem label="Xanh" />
    </div>
  );
};

export default Attributes;

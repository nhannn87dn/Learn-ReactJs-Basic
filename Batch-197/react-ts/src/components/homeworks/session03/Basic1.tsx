import styles from "./Basic1.module.css";

type TAttrItem = {
  name: string;
};

const AttrItem = ({ name }: TAttrItem) => {
  return <span className={styles.item}>{name}</span>;
};

const attrs = [
  { id: 1, name: "Đen" },
  { id: 2, name: "Trắng" },
  { id: 3, name: "Xanh" },
  { id: 4, name: "Đỏ" },
];

// const fruist = [
//   { id: 1, name: "Cam" },
//   { id: 2, name: "Chuoi" },
//   { id: 3, name: "tao" },
//   { id: 4, name: "Xoai" },
// ];

//rafce
const Basic1 = () => {
  return (
    <div className={styles.attrs}>
      <span className="label">Màu sắc</span>
      {/* <span className={`${styles.item} ${styles.active}`}>Đen</span>
      <span className={styles.item}>Hồng</span> */}
      {/*
      <AttrItem  key=AttrItem_1 name="Đen" />
      <AttrItem  key=AttrItem_2 name="Hồng" />
      <AttrItem  key=AttrItem_3 name="Xanh" />
      <AttrItem  key=AttrItem_4 name="Đỏ" /> 
      */}

      {attrs.map((item) => {
        return <AttrItem key={`AttrItem_${item.id}`} name={item.name} />;
      })}
    </div>
  );
};

export default Basic1;

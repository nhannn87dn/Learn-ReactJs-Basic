import styles from "./AttributesV2.module.css";

const attrs = [
  { id: 1, name: "Đen", active: true },
  { id: 2, name: "Xanh", active: false },
  { id: 3, name: "Hồng", active: false },
  { id: 4, name: "Trắng", active: false },
];

const AttrItem = ({ name, active }: { name: string; active: boolean }) => {
  const finalClass = active
    ? `${styles.attr_item} ${styles.current}`
    : styles.attr_item;
  return <span className={finalClass}>{name}</span>;
};

const AttributesV2 = () => {
  return (
    <div className={styles.attr_wrapper}>
      Màu sắc
      {attrs.length > 0 &&
        attrs.map((attr) => {
          return (
            <AttrItem active={attr.active} key={attr.id} name={attr.name} />
          );
        })}
      {/* <AttrItem name="Đen" />
      <AttrItem name="Xanh" />
      <AttrItem name="Hồng" /> */}
      {/* <span className={styles.attr_item}>Đen</span>
      <span className={`${styles.attr_item} ${styles.current}`}>Xanh</span> */}
    </div>
  );
};

export default AttributesV2;

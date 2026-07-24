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
  //render list
  const colors = [
    { id: 1, name: "Đen" },
    { id: 2, name: "Hồng" },
    { id: 3, name: "Xanh" },
    { id: 5, name: "Nâu" },
  ];
  return (
    <div className={styles.attrs}>
      <span className="label">Màu Sắc</span>
      {colors.map((item, index) => {
        return <AttrItem key={index} label={item.name} />;
      })}

      {/* <AttrItem label="Đen" />
      <AttrItem label="Hồng" />
      <AttrItem label="Xanh" />
      <AttrItem label="Trắng" /> */}
    </div>
  );
};

export default Attributes;

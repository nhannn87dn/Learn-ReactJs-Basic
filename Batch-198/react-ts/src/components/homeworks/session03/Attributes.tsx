import { useState } from "react";
import styles from "./Attributes.module.css";

type TAttrProps = {
  label: string;
  active: boolean;
  onClick: ()=> void
};
/*
const props = {label: 'Hong'};
const {label} = props; //destructuring
*/

const AttrItem = ({ label, active, onClick }: TAttrProps) => {
  return <span onClick={onClick} className={`${styles.value} ${active ? styles.active : ''}`}>{label}</span>;
};

const Attributes = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  //render list
  const colors = [
    { id: 1, name: "Đen" },
    { id: 2, name: "Hồng" },
    { id: 3, name: "Xanh" },
  ];
  return (
    <div className={styles.attrs}>
      <span className="label">Màu Sắc</span>
      {colors.map((item, index) => {
        return <AttrItem onClick={()=>{
          setCurrentIndex(index)
        }} active={currentIndex === index} key={index} label={item.name} />;
      })}

      {/* <AttrItem label="Đen" />
      <AttrItem label="Hồng" />
      <AttrItem label="Xanh" />
      <AttrItem label="Trắng" /> */}
    </div>
  );
};

export default Attributes;

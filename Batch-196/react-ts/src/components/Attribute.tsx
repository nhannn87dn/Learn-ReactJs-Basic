import { useState } from "react";
import styles from "./Attribue.module.css";

const AttrItem = ({
  name,
  className = "",
  onHandleClick,
}: {
  name: string;
  className?: string;
  onHandleClick?: () => void;
}) => {
  return (
    <span
      onClick={onHandleClick}
      className={`${styles[className]} ${styles.attr}`}
    >
      {name}
    </span>
  );
};

const Attribute = () => {
  const attrs = ["Đen", "Hồng", "Xanh"];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.attr_wrapper}>
      <span>Màu sắc:</span>
      {attrs.map((item, index) => (
        <AttrItem
          onHandleClick={() => setCurrentIndex(index)}
          className={index === currentIndex ? "active" : ""}
          key={index}
          name={item}
        />
      ))}
    </div>
  );
};

export default Attribute;

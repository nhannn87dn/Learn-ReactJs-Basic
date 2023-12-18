import React, { useState } from "react";
import styles from "./Attributes.module.css";

const attrs = [
  { id: 1, name: "Đen" },
  { id: 2, name: "Hồng" },
  { id: 3, name: "Xanh" },
];

const Attributes = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  console.log("currentIndex", currentIndex);

  return (
    <div className={styles.attr_container}>
      <div className={styles.attr_label}>Màu sắc</div>
      {attrs.map((attr) => {
        return (
          <div
            onClick={() => {
              console.log("attr.id", attr.id);
              setCurrentIndex(attr.id);
            }}
            key={attr.id}
            className={
              currentIndex === attr.id
                ? `${styles.attr_item} ${styles.actived}`
                : styles.attr_item
            }
          >
            {attr.name}
          </div>
        );
      })}
      {/* <div className={`${styles.attr_item} ${styles.actived}`}>Đen</div>
      <div className={styles.attr_item}>Hồng</div>
      <div className={styles.attr_item}>Xanh</div> */}
    </div>
  );
};

export default Attributes;

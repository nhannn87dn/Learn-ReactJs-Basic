/* rafce + Tab */

import { useState } from "react";
import "./Attributes.css"; /* Import css ko cần from */

const AttributeItem = ({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <span onClick={onClick} className={`attr_item ${active ? "active" : ""}`}>
      {label}
    </span>
  );
};

const attrs = [
  { id: 1, label: "Đen" },
  { id: 2, label: "Hồng" },
  { id: 3, label: "Xanh" },
];

const Attributes = () => {
  const [currentActive, setCurrentActive] = useState(0);

  //Để thay đổi active cho các item
  const handleClickAttrItem = (index: number) => {
    setCurrentActive(index);
  };

  return (
    <div>
      <span>Màu sắc</span>
      {attrs.map((attr, index) => {
        return (
          <AttributeItem
            onClick={() => {
              handleClickAttrItem(index);
            }}
            active={currentActive === index}
            key={attr.id}
            label={attr.label}
          />
        );
      })}
    </div>
  );
};

export default Attributes;

import React, { useState } from "react";

const AttrItiem = ({
  label,
  isActive,
  onHandleClick,
}: {
  label: string;
  isActive: boolean;
  onHandleClick: () => void;
}) => {
  let finalClass = "py-1 px-3 border-2";

  //   finalClass += isActive ? " border-amber-600" : " border-gray-300";
  if (isActive) {
    finalClass += " border-amber-600";
  } else {
    finalClass += " border-gray-300";
  }

  return (
    <span onClick={onHandleClick} className={finalClass}>
      {label}
    </span>
  );
};

const attrs = [
  { id: 1, label: "Đen" },
  { id: 2, label: "Hồng" },
  { id: 3, label: "Xanh" },
  { id: 4, label: "Đỏ" },
];

const Attributes = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  console.log("<<=== 🚀 currentIndex ===>>", currentIndex);
  return (
    <div className="attributes flex gap-x-2 items-center">
      <span>Màu sắc:</span>
      {attrs.map((attr) => {
        return (
          <AttrItiem
            isActive={attr.id === currentIndex}
            key={attr.id}
            label={attr.label}
            onHandleClick={() => {
              setCurrentIndex(attr.id);
            }}
          />
        );
      })}
      {/* <AttrItiem label="Đen" />
      <AttrItiem label="Hồng" />
      <AttrItiem label="Xanh" /> */}
      {/* <span className="py-1 px-3 border border-gray-300">Đen</span>
      <span className="py-1 px-3 border border-gray-300">Xanh</span>
      <span className="py-1 px-3 border border-gray-300">Hồng</span> */}
    </div>
  );
};

export default Attributes;

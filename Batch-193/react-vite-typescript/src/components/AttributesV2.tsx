import { useState } from "react";

const colors = [
  { id: 1, label: "Đen" },
  { id: 2, label: "Hồng" },
  { id: 3, label: "Xanh" },
];

const AttrItem = ({
  label,
  onHandleCLick,
  isActive,
}: {
  label: string;
  onHandleCLick: () => void;
  isActive: boolean;
}) => {
  return (
    <span
      onClick={onHandleCLick}
      className={`py-2 px-3 border cursor-pointer ${
        isActive ? "border-orange-500 text-orange-500" : "border-gray-200"
      } `}
    >
      {label}
    </span>
  );
};

const AttributesV2 = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  return (
    <div className="space-x-2">
      Màu sắc:
      {colors.length > 0 &&
        colors.map((color) => {
          return (
            <AttrItem
              onHandleCLick={() => {
                console.log(color.id);
                setCurrentIndex(color.id);
              }}
              key={color.id}
              label={color.label}
              isActive={currentIndex === color.id}
            />
          );
        })}
    </div>
  );
};

export default AttributesV2;

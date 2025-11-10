import { useState } from "react";

interface AttrItemProps {
  name: string;
  selected: boolean;
  onHandleClick: () => void;
}

const AttrItem = ({ name, selected, onHandleClick }: AttrItemProps) => {
  return (
    <span
      onClick={onHandleClick}
      className={`border-[2px] ${
        selected ? "border-gray-700" : "border-gray-300"
      } px-3 py-2`}
    >
      {name}
    </span>
  );
};

const AttributeColor = () => {
  const attrs = [
    { id: 1, name: "Đen", selected: true },
    { id: 2, name: "Hồng", selected: false },
    { id: 3, name: "Xanh", selected: false },
    { id: 4, name: "Đỏ", selected: false },
  ];
  /* Mặc định phần tử đầu tiên được chọn */
  const [currentIndex, setCurrentIndex] = useState(1);

  console.log("<<=== 🚀 currentIndex ===>>", currentIndex);

  return (
    <div className="attr_wrapper flex items-center gap-x-2">
      <span>Màu sắc:</span>
      {/* <AttrItem name="Đen" selected={true} />
      <AttrItem name="Hồng" selected={false} />
      <AttrItem name="Xanh" selected={false} /> */}
      {attrs.length > 0 &&
        attrs.map((attr) => {
          return (
            <AttrItem
              key={attr.id}
              onHandleClick={() => {
                console.log("click attr:", attr.id);
                setCurrentIndex(attr.id);
              }}
              name={attr.name}
              selected={currentIndex === attr.id}
            />
          );
        })}
    </div>
  );
};

export default AttributeColor;

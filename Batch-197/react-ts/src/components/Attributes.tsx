import { useState } from "react";

const attrs = [
  {
    id: 1,
    name: "Đen",
  },
  {
    id: 2,
    name: "Hồng",
  },
  {
    id: 3,
    name: "Xanh",
  },
];

type TAttrProps = {
  name: string;
  isActive: boolean;
  onHandleClick: () => void;
};

const AttrItem = ({ name, isActive, onHandleClick }: TAttrProps) => {
  return (
    <span
      onClick={onHandleClick}
      className={`${isActive ? "font-bold border-gray-500" : ""} attr_item border border-gray-300 py-2 px-3`}
    >
      {name}
    </span>
  );
};

const Attributes = () => {
  //currentIndex là index của phần tử trong mảng attrs
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className="flex gap-x-3 my-5">
      <span className="attr_name py-2 px-3">Màu sắc</span>
      {attrs.map((attr, index) => {
        return (
          <AttrItem
            onHandleClick={() => {
              setCurrentIndex(index);
            }}
            isActive={currentIndex === index}
            key={`attr-item-${attr.id}`}
            name={attr.name}
          />
        );
      })}
    </div>
  );
};

export default Attributes;

import { useState } from "react";

type TAttr = {
  label: string;
  active?: boolean;
  onHandleClick: () => void;
};
function AttrItem({ label, active = false, onHandleClick }: TAttr) {
  let finaleClass = "border py-1 px-2";
  if (active) {
    finaleClass += " border-blue-500 bg-gray-200";
  }
  return (
    <span onClick={onHandleClick} className={finaleClass}>
      {label}
    </span>
  );
}

const attrs = [
  { id: 1, label: "Đen" },
  { id: 2, label: "Hồng" },
  { id: 3, label: "Xanh" },
];

function Attributes() {
  console.log("Attributes");
  const [currentIndex, setCurrentIndex] = useState(3);
  return (
    <div className="attrs mb-5 space-x-2">
      Màu sắc
      {/* <AttrItem active={true} label="Đen" />
      <AttrItem label="Hồng" />
      <AttrItem label="Xanh" /> */}
      {attrs.map((attr) => (
        <AttrItem
          onHandleClick={() => {
            setCurrentIndex(attr.id);
          }}
          active={attr.id === currentIndex}
          key={attr.id}
          label={attr.label}
        />
      ))}
    </div>
  );
}

export default Attributes;

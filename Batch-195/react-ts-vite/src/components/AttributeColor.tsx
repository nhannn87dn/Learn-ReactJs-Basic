interface AttrItemProps {
  name: string;
  selected: boolean;
}

const AttrItem = ({ name, selected }: AttrItemProps) => {
  return (
    <span
      className={`border-[2px] ${
        selected ? "border-gray-700" : "border-gray-300"
      } px-3 py-2`}
    >
      {name}
    </span>
  );
};

const AttributeColor = () => {
  return (
    <div className="attr_wrapper flex items-center gap-x-2">
      <span>Màu sắc:</span>
      <AttrItem name="Đen" selected={false} />
      <AttrItem name="Hồng" selected={true} />
      <AttrItem name="Xanh" selected={false} />
    </div>
  );
};

export default AttributeColor;

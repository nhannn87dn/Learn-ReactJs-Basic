type TAttr = {
  label: string;
  active?: boolean;
};
function AttrItem({ label, active = false }: TAttr) {
  let finaleClass = "border py-1 px-2";
  if (active) {
    finaleClass += " border-blue-500 bg-gray-200";
  }
  return <span className={finaleClass}>{label}</span>;
}

function Attributes() {
  return (
    <div className="attrs mb-5 space-x-2">
      Màu sắc
      <AttrItem active={true} label="Đen" />
      <AttrItem label="Hồng" />
      <AttrItem label="Xanh" />
    </div>
  );
}

export default Attributes;

interface IAttrProps {
  label: string;
  active?: boolean;
}
const AttrItem = ({ label, active = false }: IAttrProps) => {
  let finalStyle = "border border-slate-200 px-3 py-2 text-slate-500";
  if (active) {
    finalStyle = "border border-slate-900 px-3 py-2 text-slate-900";
  }
  return <span className={finalStyle}>{label}</span>;
};

const Attributes = () => {
  return (
    <div className="mb-5">
      Màu sắc:
      <AttrItem active={true} label="Đen" />
      <AttrItem label={"Hồng"} />
      <AttrItem label={"Xanh"} />
    </div>
  );
};

export default Attributes;

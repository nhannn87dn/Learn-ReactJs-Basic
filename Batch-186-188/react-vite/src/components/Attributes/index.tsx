type TAttrItem = {
  label?: string;
  /* Dấu chấm ? để báo có thể ko cần truyền */
};
//Cách 1: tham số mặc định
// const AttrItem = ({ label = "None" }: TAttrItem) => {
//   return <span className="border text-slate-500">{label}</span>;
// };

const AttrItem = ({ label }: TAttrItem) => {
  return <span className="border text-slate-500">{label}</span>;
};

const Attribute = () => {
  return (
    <div>
      Màu sắc:
      <AttrItem label="Xanh" />
      <AttrItem label="Đen" /> <AttrItem label="Hồng" />
      <AttrItem />
    </div>
  );
};
//Cách 2
AttrItem.defaultProps = {
  label: "None",
};

export default Attribute;

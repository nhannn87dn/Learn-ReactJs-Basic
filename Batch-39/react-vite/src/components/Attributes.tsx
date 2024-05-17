/* rafce + Tab */

import "./Attributes.css"; /* Import css ko cần from */

const AttributeItem = ({ label }: { label: string }) => {
  return <span className="attr_item">{label}</span>;
};

const Attributes = () => {
  return (
    <div>
      <span>Màu sắc</span>
      <AttributeItem label="Gold" />
      <AttributeItem label="Đen" />
      <AttributeItem label="Hồng" />
      <AttributeItem label="Xanh" />
      <AttributeItem label="Cam" />
      {/* <span className="attr_item">Đen</span>
      <span className="attr_item">Hồng</span>
      <span className="attr_item">Xanh</span> */}
    </div>
  );
};

export default Attributes;

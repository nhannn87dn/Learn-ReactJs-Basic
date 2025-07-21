interface IPolicyItem {
  icon: React.ReactNode;
  name: string;
  content: string;
}

const PolicyItem = ({ icon, name, content }: IPolicyItem) => {
  return (
    <div className="policy_item">
      <span>{icon}</span>
      <strong>{name}:</strong>
      <span>{content}</span>
    </div>
  );
};
const Policy = () => {
  return (
    <div className="policies my-5">
      <PolicyItem
        icon="1"
        name="Bộ sản phẩm gồm"
        content="Hộp, Sách hướng dẫn, Cáp, Cây lấy sim"
      />
      <PolicyItem icon="2" name="Bảo Hành" content="Chính hãng 12 tháng" />
      <PolicyItem icon="3" name="Đổi trả" content="Hư gì đổi nấy 12 tháng" />
    </div>
  );
};

export default Policy;

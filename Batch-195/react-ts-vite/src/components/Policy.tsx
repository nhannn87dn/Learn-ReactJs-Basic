import { Shield, SquareCheck, Undo2 } from "lucide-react";

interface IPolicyItem {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const PolicyItem = ({ icon, label, description }: IPolicyItem) => {
  return (
    <li className="flex gap-x-2 items-center">
      {icon} <strong>{label}</strong> : {description}
    </li>
  );
};

const Policy = () => {
  return (
    <div className="policy-wrapper p-5">
      <ul className="flex flex-col gap-y-3">
        <PolicyItem
          icon={<SquareCheck />}
          label="Bộ sản phẩm"
          description="Hộp, sách hướng dẫn, cáp sạc"
        />
        <PolicyItem
          icon={<Shield />}
          label="Bảo hành"
          description="Chính hãng 12 tháng"
        />
        <PolicyItem
          icon={<Undo2 />}
          label="Đổi trả"
          description="Cam kết đổi trả trong 30 ngày"
        />
      </ul>
    </div>
  );
};

export default Policy;

import React from "react";
import { LuShieldCheck } from "react-icons/lu";

interface IPolicyItemProps {
  icon: React.ReactNode;
  label: string;
  text: string;
}
const PolicyItem = ({ icon, label, text }: IPolicyItemProps) => {
  return (
    <li className="flex items-center">
      <span className="text-sky-500">{icon}</span> <strong>{label}:</strong>{" "}
      {text}
    </li>
  );
};
const Policy = () => {
  return (
    <ul>
      <PolicyItem
        icon={<LuShieldCheck />}
        label="Bộ sản phẩm"
        text="Hộp, sách hướng dẫn"
      />
      <PolicyItem icon="2" label="Bảo hành" text="12 tháng" />
      <PolicyItem icon="3" label="Đổi trả" text="Hư gì đổi nấy 12 tháng" />
    </ul>
  );
};

export default Policy;

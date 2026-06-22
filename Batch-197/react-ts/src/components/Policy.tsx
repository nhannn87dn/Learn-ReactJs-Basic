import { ShieldCheck, Truck, Undo2 } from "lucide-react";
//props là một object.
type PolicyProps = {
  icon: React.ReactNode;
  text: string;
};

const PolicyItem = ({ icon, text }: PolicyProps) => {
  return (
    <li>
      {icon} {text}
    </li>
  );
};

const Policy = () => {
  return (
    <ul className="policy">
      {/* <li>Chính sách bảo hành</li>
      <li>Giao hàng & thanh toán</li> */}
      <PolicyItem icon={<Undo2 />} text="Chính sách đổi trả" />
      <PolicyItem icon={<ShieldCheck />} text="Chính sách bảo hành" />
      <PolicyItem icon={<Truck />} text="Giao hàng & thanh toán" />
    </ul>
  );
};

export default Policy;

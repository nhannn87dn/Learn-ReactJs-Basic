import { ShieldCheck, SquareCheck, Undo2 } from "lucide-react";
import styles from "./Policy.module.css";

type TPolicyItemProps = {
  icon: React.ReactNode;
  name: string;
  value: string;
};

const PolicyItem = ({ icon, name, value }: TPolicyItemProps) => {
  return (
    <li className={styles.policy_item}>
      <span className={styles.icon}>{icon}</span>
      <strong>{name}</strong> <span>{value}</span>
    </li>
  );
};

const Policy = () => {
  return (
    <ul className={styles.policy}>
      <PolicyItem
        icon={<SquareCheck size={16} />}
        name="Bộ sản phẩm gồm"
        value="Hộp và sách hướng dẫn"
      />
      <PolicyItem
        icon={<ShieldCheck size={16} />}
        name="Bảo hành"
        value="12 tháng"
      />
      <PolicyItem icon={<Undo2 size={16} />} name="Đổi trả" value="12 tháng" />
    </ul>
  );
};

export default Policy;

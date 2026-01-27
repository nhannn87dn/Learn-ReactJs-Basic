import { ShieldCheck, SquareCheck, Undo2 } from "lucide-react";
import styles from "./Policy.module.css";
type PolicyItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const PolicyItem = ({ icon, title, description }: PolicyItemProps) => {
  return (
    <li>
      <span>{icon}</span>
      <strong>{title}:</strong>
      <span>{description}</span>
    </li>
  );
};

const Policy = () => {
  const m = 12;
  const policies = [
    {
      id: 1,
      icon: <SquareCheck />,
      title: "Bộ sản phẩm",
      description: "Hộp, sách hướng dẫn",
    },
    {
      id: 2,
      icon: <ShieldCheck />,
      title: "Bảo hành",
      description: `${m} tháng`,
    },
    {
      id: 3,
      icon: <Undo2 />,
      title: "Đổi trả",
      description: "Trong vòng 7 ngày",
    },
    {
      id: 4,
      icon: <ShieldCheck />,
      title: "Hỗ trợ",
      description: "Hỗ trợ trọn đời",
    },
  ];
  return (
    <ul className={styles.policies}>
      {policies.length > 0 &&
        policies.map((policy) => {
          return (
            <PolicyItem
              key={policy.id}
              icon={policy.icon}
              title={policy.title}
              description={policy.description}
            />
          );
        })}
      {/* <PolicyItem
        icon={<SquareCheck />}
        title="Bộ sản phẩm"
        description="Hộp, sách hướng dẫn"
      />
      <PolicyItem
        icon={<ShieldCheck />}
        title="Bảo hành"
        description={`${m} tháng`}
      />
      <PolicyItem
        icon={<Undo2 />}
        title="Đổi trả"
        description="Trong vòng 7 ngày"
      /> */}
      {/* <li>
        <span>
          <SquareCheck />
        </span>
        <strong>Bộ sản phẩm:</strong>
        <span>Hộp, sách hướng dẫn</span>
      </li>
      <li>
        <span>
          <ShieldCheck />
        </span>
        <strong>Bộ sản phẩm:</strong>
        <span>Hộp, sách hướng dẫn</span>
      </li>
      <li>
        <span>
          <Undo2 />
        </span>
        <strong>Bộ sản phẩm:</strong>
        <span>Hộp, sách hướng dẫn</span>
      </li> */}
    </ul>
  );
};

export default Policy;

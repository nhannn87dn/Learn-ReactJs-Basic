import { Dot } from "lucide-react";
import styles from "./MyCV.module.css";
const RateDots = ({ rate }: { rate: number }) => {
  const arrs = [1, 2, 3, 4, 5];
  return (
    <div>
      {arrs.map((item) => {
        if (rate >= item) {
          return <Dot className={styles.bg_yellow} size={32} />;
        }
        return <Dot size={32} />;
      })}
    </div>
  );
};

export default RateDots;

import styles from "./Progress.Module.css";

type ProgressItemProps = {
  percent: number;
  label: string;
  bg_label: string;
  bg_percent: string;
};

const ProgressItem = ({
  percent,
  label,
  bg_label,
  bg_percent,
}: ProgressItemProps) => {
  return (
    <div className={`${styles.progress_item} ${styles.pg_red}`}>
      <div style={{ backgroundColor: bg_label }} className={styles.pg_label}>
        {label}
      </div>
      <div className={styles.pg_bar}>
        <div
          style={{
            width: `${percent}%`,
            backgroundColor: bg_percent,
          }}
          className={styles.percent}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};
const Progress = () => {
  return (
    <div>
      <ProgressItem
        bg_label="#E54D4C"
        bg_percent="#F75354"
        label="Bandwidth"
        percent={20}
      />
      <ProgressItem
        bg_label="#4CAF50"
        bg_percent="#81C784"
        label="Storage"
        percent={50}
      />
      <ProgressItem
        bg_label="#2196F3"
        bg_percent="#64B5F6"
        label="Users"
        percent={70}
      />
      <ProgressItem
        bg_label="#FF9800"
        bg_percent="#FFB74D"
        label="Visitors"
        percent={30}
      />
    </div>
  );
};

export default Progress;

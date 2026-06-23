import styles from "./BlockUI1.module.css";

type TProcessBarItem = {
  label: string;
  percent: number;
  bg_label: string;
  bg_percent: string;
};

const ProcessBarItem = ({
  label,
  percent,
  bg_label,
  bg_percent,
}: TProcessBarItem) => {
  return (
    <div className={styles.process_bar_item}>
      <div
        style={{
          backgroundColor: bg_label,
        }}
        className={`${styles.process_bar_label}`}
      >
        {label}
      </div>
      <div className={styles.process_bar}>
        <div
          style={{
            width: `${percent}%`,
            backgroundColor: bg_percent,
          }}
          className={`${styles.process_bar_percent}`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

const BlockUI1 = () => {
  return (
    <div className="process_bar_list">
      <ProcessBarItem
        bg_label="#e54d4c"
        bg_percent="#f75354"
        label="Bandwidth"
        percent={20}
      />
      <ProcessBarItem
        bg_label="#2DB8CD"
        bg_percent="#31C8DD"
        label="Storage"
        percent={50}
      />
      <ProcessBarItem
        bg_label="#4AC25E"
        bg_percent="#51D566"
        label="User"
        percent={70}
      />
    </div>
  );
};

export default BlockUI1;

import styles from "./ProcessBar.module.css";

type TProcessItemProp = {
  label: string;
  bgLabel: string;
  percent: number;
  bgPercent: string;
};

const ProcessItem = ({
  label,
  percent,
  bgLabel,
  bgPercent,
}: TProcessItemProp) => {
  return (
    <div className={styles.process_item}>
      <div
        style={{
          backgroundColor: bgLabel,
        }}
        className={styles.process_label}
      >
        {label}
      </div>
      <div className={styles.process_bar}>
        <div
          style={{
            backgroundColor: bgPercent,
            width: `${percent}%`,
          }}
          className={styles.process_percent}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

const ProcessBar = () => {
  return (
    <div>
      <ProcessItem
        label="Bandwidth"
        bgLabel="#E54D4C"
        percent={20}
        bgPercent="#F75354"
      />
      <ProcessItem
        label="Storage"
        percent={50}
        bgLabel="#2DB8CD"
        bgPercent="#31C8DD"
      />
      <ProcessItem
        label="User"
        percent={70}
        bgLabel="#4AC25E"
        bgPercent="#51D567"
      />
    </div>
  );
};

export default ProcessBar;

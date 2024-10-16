import styles from "./BlockUI.module.css";

type TSingleBlock = {
  label: string;
  percent: number;
  bg_label?: string;
  bg_percent?: string;
};
const SingleBlock = ({
  label,
  percent,
  bg_label,
  bg_percent,
}: TSingleBlock) => {
  return (
    <div className={styles.block_bar}>
      <div style={{ backgroundColor: bg_label }} className={styles.block_label}>
        {label}
      </div>
      <div className={styles.block_process}>
        <div
          style={{ width: `${percent}%`, backgroundColor: bg_percent }}
          className={styles.block_percent}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

const BlockUI = () => {
  return (
    <>
      <SingleBlock label="Bandwidth" percent={20} />
      <SingleBlock
        label="Storage"
        percent={50}
        bg_label="#2DB8CD"
        bg_percent="#31C8DD"
      />
      <SingleBlock
        label="User"
        percent={70}
        bg_label="#4AC25E"
        bg_percent="#51D567"
      />
    </>
  );
};

export default BlockUI;

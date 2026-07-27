import styles from "./MyCV.module.css";
const MyCVTitle = ({
  title,
  color = "#111",
}: {
  title: string;
  color: string;
}) => {
  return (
    <h2
      style={{
        color: color,
      }}
      className={styles.cv_title}
    >
      {title}
    </h2>
  );
};

export default MyCVTitle;

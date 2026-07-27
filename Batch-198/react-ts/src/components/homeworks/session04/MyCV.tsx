import styles from "./MyCV.module.css";
import MyCV_Contact from "./MyCV_Contact";
const MyCV = () => {
  return (
    <div className={styles.cv_layout}>
      <div className={styles.cv_left}>
        <MyCV_Contact />
      </div>
      <div className={styles.cv_right}>cv_right</div>
    </div>
  );
};

export default MyCV;

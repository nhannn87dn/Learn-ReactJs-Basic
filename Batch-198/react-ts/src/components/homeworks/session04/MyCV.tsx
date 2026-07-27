import styles from "./MyCV.module.css";
import MyCVAboutme from "./MyCVAboutme";
import MyCVContact from "./MyCVContact";
const MyCV = () => {
  return (
    <div className={styles.cv_layout}>
      <div className={styles.cv_left}>
        <MyCVContact />
      </div>
      <div className={styles.cv_right}>
        <MyCVAboutme />
      </div>
    </div>
  );
};

export default MyCV;

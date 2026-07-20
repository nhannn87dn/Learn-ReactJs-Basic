import styles from "./Profile.module.css";
//dev B
const Profile = () => {
  return (
    <div>
      <p className={styles.primary_text}>Họ tên: Nguyễn Văn A</p>
      <p>Nghề nghiệp: Frontend Developer</p>
      <p>Thành phố: Đà Nẵng</p>
    </div>
  );
};

export default Profile;

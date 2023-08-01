import HeaderLogo from "../../HeaderLogo";
import NavigationBar from "../../NavigationBar";
import styles from "./Header.module.css";

const Header = () => {
  console.log('header running');
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <HeaderLogo />
          <NavigationBar />
        </div>
      </div>
    </header>
  );
};

export default Header;

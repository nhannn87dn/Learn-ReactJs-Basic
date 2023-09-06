import Navigation from "../../../Navigation";
import styles from "./Header.module.css";

const Header = () => {
    console.log('Header render');
  return (
    <header className={`bg-color ${styles.header}`}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className="logo">FakeShop</div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;

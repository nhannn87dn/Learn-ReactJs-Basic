import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MyLogo</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

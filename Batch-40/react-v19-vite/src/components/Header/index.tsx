import { useBrowserWidth } from "../../hooks/useBrowserWidth";
import "./Header.css";
import UserInfo from "./UserInfo";
function Header() {
  const browserWidth = useBrowserWidth();
  return (
    <header className="header">
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        LOGO
      </div>
      <div className="nav">
        Nav
        <UserInfo />
        {browserWidth}
      </div>
    </header>
  );
}
export default Header;

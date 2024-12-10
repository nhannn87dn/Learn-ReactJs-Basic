import "./Header.css";
function Header() {
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
      <div className="nav">Nav</div>
    </header>
  );
}
export default Header;

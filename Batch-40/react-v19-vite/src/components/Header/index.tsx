import { Link } from "react-router";
import "./Header.css";

function Header() {
  console.log("Header render");
  return (
    <header className="header bg-indigo-500 text-white py-4">
      <div className="container mx-auto">
        <div className="header-inner flex justify-between items-center">
          <div>LOGO</div>
          <div className="nav space-x-3">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            {/* <a href="/blog">Blog</a> */}
            <Link to="/blog">Blog</Link>
            <Link to="/customer">Customer</Link>
            {/* Khi bạn muốn liên kết với một URL bên ngoài */}
            <a target="_blank" href="https://dev.to">
              Dev.to
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

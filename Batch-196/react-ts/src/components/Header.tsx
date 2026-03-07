import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-indigo-500 text-white">
      <div className="container mx-auto ">
        <div className="header_middle flex justify-between items-center py-4">
          <div className="logo">LOGO</div>
          <nav>
            <ul className="flex gap-x-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

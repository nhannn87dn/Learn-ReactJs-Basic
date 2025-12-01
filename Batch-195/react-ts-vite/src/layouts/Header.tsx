import { Link } from "react-router";

const Header = () => {
  console.log("header rendered");
  return (
    <header className="bg-indigo-500 text-white py-5">
      <div className="container mx-auto">
        <div className="header-middle flex items-center justify-between">
          <div className="logo">LOGO</div>
          <nav>
            <ul className="flex gap-4">
              <li>
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tin-tuc">News</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

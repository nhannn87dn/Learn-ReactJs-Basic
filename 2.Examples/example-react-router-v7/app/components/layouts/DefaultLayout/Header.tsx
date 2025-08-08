import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav className="flex gap-4">
        <ul className="flex gap-4 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

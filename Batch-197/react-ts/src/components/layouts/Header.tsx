import { Link } from "react-router";
import Cart from "../Cart";

const Header = () => {
  return (
    <header className="bg-indigo-500 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold transition-colors duration-200"
            >
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Cart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-100 transition-colors">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router";
import CartInfo from "./CartInfo";
import { useAuthStore } from "../stores/useAuthStore";

const Header = () => {
  const { isAuthenticated, logout } = useAuthStore();
  return (
    <header className="bg-indigo-600 text-white py-5">
      <div className="container mx-auto">
        <div className="header-middle flex justify-between">
          <div className="logo">FAKE SHOP</div>
          <nav>
            <ul className="flex gap-x-4">
              <li>
                {/* <a href="/">Home</a> */}
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold" : ""
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* <a href="/blog">Blog</a> */}
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold" : ""
                  }
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                {/* <a href="products">Products</a> */}
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold" : ""
                  }
                  to={"/products"}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold" : ""
                  }
                  to={"/customer"}
                >
                  Customer
                </NavLink>
              </li>
              <li>
                {isAuthenticated ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "font-bold" : ""
                    }
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                )}
              </li>
              <li>
                <CartInfo />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

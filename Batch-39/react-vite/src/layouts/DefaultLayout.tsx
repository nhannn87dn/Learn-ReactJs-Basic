import { Outlet, Link } from "react-router-dom";
import { useCount } from "../stores/useCount";
import { useAuth } from "../stores/useAuth";
const DefaultLayout = () => {
  console.log("Layout render");

  const { count } = useCount();

  const { user } = useAuth();
  console.log("<<=== 🚀 user ===>>", user);
  return (
    <>
      <header className="bg-indigo-500 text-white py-5">
        <div className="container mx-auto">
          <div className="header_wrapper flex justify-between">
            <div className="logo">LOGO</div>
            <nav className="navigation">
              <ul className="flex gap-x-3">
                <li>
                  {/* <a href="/">Home</a> */}
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  {/* <a href="/blog">Blog</a> */}
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  {/* <a href="/products">Products</a> */}
                  <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/customers"}>Customer</Link>
                </li>
                <li>{count}</li>
                <li>
                  {user !== null ? (
                    <>
                      <strong>{user?.name}</strong>
                    </>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="my-5">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto">Footer</div>
      </footer>
    </>
  );
};

export default DefaultLayout;

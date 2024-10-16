import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-indigo-500 text-white py-4 flex justify-between px-10">
      <div className="logo">Aptech</div>
      <nav>
        <ul className="flex gap-x-10">
          <li>
            {/* <a href="/">Home</a> */}
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            {/* <a href="/blog">Blog</a> */}
            <Link to={`/blog`}>Blog</Link>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <Link to={`/products`}>Products</Link>
          </li>
          <li>
            <Link to={`/customer`}>Customer</Link>
          </li>
          <li>
            <Link to={`/dsdsdsdsd`}>404</Link>
          </li>
          <li>
            <a href="https://24h.com.vn">24h.com.vn</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

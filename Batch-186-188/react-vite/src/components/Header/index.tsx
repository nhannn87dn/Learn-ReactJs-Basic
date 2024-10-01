import { Link } from "react-router-dom";
/*

Dùng component Link để chuyển trang khi cần chuyển trang nội bộ.
Dùng thẻ a khi cần chuyển trang ra link bên ngoài ...
*/
const Header = () => {
  return (
    <header className="bg-indigo-500 text-white py-5">
      <div className="container mx-auto">
        <div className="header_wrapper flex justify-between">
          <div className="logo">LOGO</div>
          <nav>
            <ul className="flex gap-x-[20px]">
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
                <Link to={"/gioi-thieu.html"}>Giới thiệu</Link>
              </li>
              <li>
                {/* Khi cần chuyển trang ra bên ngoài thì dùng thẻ a */}
                <a target="_blank" href="https://dev.to">
                  dev.to
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

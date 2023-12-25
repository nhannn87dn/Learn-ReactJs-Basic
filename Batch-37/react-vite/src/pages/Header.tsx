import { Link } from "react-router-dom";

/**
 * Khi nào thì dùng thẻ a ? ==> Khi bạn muốn page load lại. Thông thường Liên kết ra một URL bên ngoài app
 *
 * Khi nào thì dùng Link ? ==> Dùng khi bạn muốn liên kết đến một URL trong nội bộ App
 *
 */
const Header = () => {
  console.log("Header render");
  return (
    <header className="bg-indigo-500 text-white py-2 px-3 mb-5">
      <div className="container mx-auto">
        <div className="header_wrapper flex justify-between">
          <div className="logo text-3xl font-bold">React Shop</div>
          <nav>
            <ul className="flex gap-x-3">
              <li>
                {/* Thẻ a sẽ làm fresh lại trang để nạp nội dung mới */}
                {/* <a href="/">Home</a> */}
                {/* Với Link thì trang khi bị fresh lại */}
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
                <Link to={"/customers"}>Customers</Link>
              </li>
              <li>
                {/* Liên kết ra một trang web khác */}
                <a href="https://24h.com.vn">24h.com.vn</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

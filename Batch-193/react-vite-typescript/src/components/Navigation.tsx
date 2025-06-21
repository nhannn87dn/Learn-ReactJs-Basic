import { Link } from "react-router";

function Navigation() {
  return (
    <ul className="flex gap-x-2">
      <li>
        {/* <a href="/">Home</a> */}
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        {/* <a href="/products">Products</a> */}
        <Link to={"/products"}>Products</Link>
      </li>
      <li>
        {/* <a href="/lien-he">Liên hệ</a> */}
        <Link to={"/lien-he"}>Liên hệ</Link>
      </li>
      <li>
        <a target="_blank" href="https://dev.to">
          dev.to -- Link ra ngoài
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

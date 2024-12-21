import { Link } from "react-router";

export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product Page Content</p>
      <ul>
        <li>
          <Link to={"/product/iphone-16-pro-max"}>iphone 16 promax</Link>
        </li>
        <li>
          <Link to={"/product/samsung-galaxy-s25"}>Samsung Galaxy S25</Link>
        </li>
      </ul>
    </div>
  );
}

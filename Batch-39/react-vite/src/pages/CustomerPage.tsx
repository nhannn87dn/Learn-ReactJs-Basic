import { Link, Outlet } from "react-router-dom";

const CustomerPage = () => {
  return (
    <div className="flex">
      <div className="sidebar w-[200px] bg-slate-200">
        <ul>
          <li>
            <Link to="/customers">Dashboard</Link>
          </li>
          <li>
            <Link to="/customers/profile">Profile</Link>
          </li>
          <li>
            <Link to="/customers/orders">Orders</Link>
          </li>
        </ul>
      </div>
      <div className="main-content flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerPage;

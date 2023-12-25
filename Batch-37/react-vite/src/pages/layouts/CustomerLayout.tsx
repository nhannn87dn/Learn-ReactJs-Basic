import { Outlet, Link } from "react-router-dom";
const CustomerLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold"> </h1>
      <h2>CustomersPage </h2>
      <div className="customer_layout flex">
        <div className="left w-[200px] bg-slate-300 h-[500px]">
          <ul>
            <li>
              <Link to={"/customers/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/customers/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/customers/orders"}>Orders</Link>
            </li>
          </ul>
        </div>
        <div className="right flex-1">
          {/* Nội dung các trang sẽ load lên ở đây */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;

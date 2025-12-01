import { Link, Outlet } from "react-router";

const CustomerLayout = () => {
  return (
    <main className="container mx-auto my-5">
      <div className="customer-layout flex gap-x-[30px]">
        <div className="customer-navigation bg-gray-100 w-[220px] p-4">
          {/* Navigation items go here */}
          <ul>
            <li>
              <Link to="/customer">Dashboard</Link>
            </li>
            <li>
              <Link to="/customer/order">Orders</Link>
            </li>
            <li>
              <Link to="/customer/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="customer-main-content flex-1">
          {/* Main content goes here */}
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default CustomerLayout;

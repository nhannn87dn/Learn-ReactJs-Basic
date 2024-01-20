import { Link, Outlet } from "react-router-dom";
const CustomerPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">CustomerPage Page</h1>
      <div className="flex">
        <div className="sidebar flex flex-col w-[220px]">
          <Link to={`/customer`}>Dashboard</Link>
          <Link to={`/customer/profile`}>Profile</Link>
          <Link to={`/customer/orders`}>Orders</Link>
        </div>
        <div className="main_content flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CustomerPage;

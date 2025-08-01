import { Link, Outlet } from "react-router";

const CustomerLayout = () => {
  return (
    <main className="container mx-auto customer-layout flex gap-x-5 my-5">
      <aside className="sidebar flex flex-col gap-y-4 bg-gray-300 p-5">
        <Link to={"/customer"}>Dashboard</Link>
        <Link to={"/customer/profile"}>Profile</Link>
        <Link to={"/customer/order"}>Orders</Link>
      </aside>
      <section className="main-content">
        <Outlet />
      </section>
    </main>
  );
};

export default CustomerLayout;

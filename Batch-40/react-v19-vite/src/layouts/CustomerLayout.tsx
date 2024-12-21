import { Link } from "react-router";
import { Outlet } from "react-router";

export default function CustomerLayout() {
  return (
    <div className="flex ">
      <div className="w-1/5 bg-gray-200 p-4 flex flex-col space-y-4">
        <Link to={"/customer"}>Dashboard</Link>
        <Link to={"/customer/orders"}>Orders</Link>
      </div>
      <section className="w-4/5 p-4">
        <Outlet />
      </section>
    </div>
  );
}

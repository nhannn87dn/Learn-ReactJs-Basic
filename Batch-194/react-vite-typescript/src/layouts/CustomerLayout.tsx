import { Link, Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";

const CustomerLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
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

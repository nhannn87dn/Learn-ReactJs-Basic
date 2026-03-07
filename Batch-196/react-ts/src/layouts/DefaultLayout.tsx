import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;

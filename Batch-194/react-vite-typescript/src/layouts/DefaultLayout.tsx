import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = () => {
  console.log("DefaultLayout render");
  return (
    <>
      <Header />
      {/* Noi dung */}
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;

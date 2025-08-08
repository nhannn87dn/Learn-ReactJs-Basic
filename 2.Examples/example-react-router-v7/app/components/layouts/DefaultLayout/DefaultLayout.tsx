import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default DefaultLayout
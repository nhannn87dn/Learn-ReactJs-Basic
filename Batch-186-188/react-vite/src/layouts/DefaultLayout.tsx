import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
/**
 * Layout là một thành phần chứ UI dùng chung
 * Ví dụ: Header, Footer
 */
const DefaultLayout = () => {
  console.log("DefaultLayout Render");
  return (
    <>
      <Header />
      <main className="py-5 min-h-[565px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

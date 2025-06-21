import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
/**
 *
 * Cấu trúc tập tin html5
 */
const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Vị trí load phần nội dung các trang */}
        <Outlet />
        {/* 
         Outlet được xem lại slot, chỗ ngồi đại diện
         từng component trong folder pages/
         
         */}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

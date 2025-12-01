import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

/* 
Chứa những UI dùng cho toàn bộ trang 
- Header
- Footer
- Sidebar
- ...

*/
const DefaultLayout = () => {
  return (
    <>
      <Header />
      {/* Nội dung chính */}
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;

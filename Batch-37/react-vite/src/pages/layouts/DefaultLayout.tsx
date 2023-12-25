import Footer from "../Footer";
import Header from "../Header";

import { Outlet } from "react-router-dom";

/**
 * Là component
 * Chứa all các UI dùng chung
 * Header
 * Footer
 */

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      {/* Body content */}
      <main className="container mx-auto">
        {/* Nội dung các trang sẽ load lên ở đây */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

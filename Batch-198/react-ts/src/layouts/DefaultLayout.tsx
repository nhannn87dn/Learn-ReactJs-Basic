import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

/*
Nó là một cấu trúc document HTML 5
Gồm 3 phần header, mail, footer

*/
const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

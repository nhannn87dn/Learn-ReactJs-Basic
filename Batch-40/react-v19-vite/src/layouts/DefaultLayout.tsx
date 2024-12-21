import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultLayout() {
  console.log("<<=== 🚀  DefaultLayout===>>");
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Outlet />
        {/* Outlet là vị trí mà các component
         ở prop element trong phần định route sẽ được render
          */}
      </main>
      <Footer />
    </>
  );
}

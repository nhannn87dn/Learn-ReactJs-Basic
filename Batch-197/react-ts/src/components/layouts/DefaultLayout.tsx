import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;

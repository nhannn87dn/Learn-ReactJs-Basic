import React from "react";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white flex justify-between">
      <div className="logo">LOGO</div>
      <UserInfo />
    </header>
  );
};

export default Header;

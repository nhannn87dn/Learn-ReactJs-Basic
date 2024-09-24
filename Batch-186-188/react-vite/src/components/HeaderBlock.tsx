import React from "react";
import UserInfo from "./UserInfo";

const HeaderBlock = () => {
  return (
    <div className="header-wrapper flex justify-between bg-indigo-500 text-white py-5">
      <div className="logo">LOGO</div>
      <nav>
        <ul className="flex gap-x-4">
          <li>Home</li>
          <li>Blog</li>
          <li>
            <UserInfo />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBlock;

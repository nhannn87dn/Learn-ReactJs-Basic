import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { userContext } from "./context/userContext";
import { useBrowserWidth } from "./hooks/useBrowserWidth";

function App() {
  const userInfo = {
    id: 1,
    name: "John 123",
    avatarUrl: "http://",
  };

  const browserWidth = useBrowserWidth();

  return (
    <div className="container mx-auto my-10">
      {browserWidth}
      {browserWidth < 768 ? <p>Mobile</p> : <p>Desktop</p>}
      <userContext.Provider value={userInfo}>
        {/* Đặt các component cần sử dụng context ở đây */}
        <Header />
      </userContext.Provider>
    </div>
  );
}

export default App;

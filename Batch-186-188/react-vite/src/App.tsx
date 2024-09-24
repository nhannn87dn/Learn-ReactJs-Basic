import { useState } from "react";
import "./App.css";
import HeaderBlock from "./components/HeaderBlock";
import { UserProvider } from "./context/userContext";
import { useBrowserWidth } from "./hooks/useBrowserWidth";

function App() {
  console.log("render");

  const user = { id: 1, name: "Nhan 2" };

  const browserWidth = useBrowserWidth();

  return (
    <UserProvider user={user}>
      <div className="container mx-auto">
        <HeaderBlock />
        {browserWidth}
        {browserWidth > 980 && <div>Desktop</div>}
        {browserWidth < 525 && <div>Mobile</div>}
      </div>
    </UserProvider>
  );
}

export default App;

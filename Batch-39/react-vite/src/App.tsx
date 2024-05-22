import "./App.css";
import React from "react";
import Count from "./components/Count";
import ButtonLike from "./components/ButtonLike";
import Price from "./components/Price";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log("app render");
  return (
    <div className="container mx-auto">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      <div className="container mx-auto">
        {isOpen && <Count />}

        <ButtonLike />
        <Price />
      </div>
    </div>
  );
}

export default App;

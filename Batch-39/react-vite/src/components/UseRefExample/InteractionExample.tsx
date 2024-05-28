import React, { useEffect, useRef } from "react";

function InteractionExample() {
  const buttonRef = useRef(null);

  const inputRef = useRef();

  console.log("render");

  const handleClick = () => {
    inputRef.current.value = "Hello, React!";
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("text-orange-500");
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.classList.remove("text-orange-500");
      }
    };
  }, []);

  return (
    <>
      <button ref={buttonRef}>Click me</button>;
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Change Value</button>
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  );
}

export default InteractionExample;

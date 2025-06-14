import { useEffect, useRef } from "react";

function InteractionExample() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("font-bold");
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.classList.remove("font-bold");
      }
    };
  }, []);

  const inputRef = useRef(null);

  console.log("render");

  const handleClick = () => {
    inputRef.current.value = "Hello, React!";
  };
  return (
    <>
      <button ref={buttonRef}>Click me</button>;
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Value</button>
    </>
  );
}

export default InteractionExample;

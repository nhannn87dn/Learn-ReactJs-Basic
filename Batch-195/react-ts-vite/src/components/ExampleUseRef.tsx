import React, { useRef, useEffect, useState } from "react";

function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

function ResetInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const handleReset = () => {
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const ExampleUseRef = () => {
  return (
    <>
      <TextInput />
      <hr />
      <ResetInput />
    </>
  );
};
export default ExampleUseRef;

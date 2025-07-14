import { useState } from "react";

const Count = () => {
  //Hook useState
  const [count, setCount] = useState(0);
  const onHandleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //count = count + 1;
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onHandleClick}>+3</button>
    </div>
  );
};

export default Count;

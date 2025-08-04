// import { useState } from "react";

import { useCountStore } from "../stores/useCountStore";

const Count = () => {
  // //Hook useState
  // const [count, setCount] = useState(0);
  // const onHandleClick = () => {
  //   setCount((prev) => prev + 1);
  // };

  //Sử dụng từ kho chung
  const { count, setCount } = useCountStore();
  return (
    <div>
      <h2>COUNT A</h2>
      <h1>{count}</h1>
      <button onClick={setCount}>+1</button>
    </div>
  );
};

export default Count;

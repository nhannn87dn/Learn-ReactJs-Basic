import React, { useCallback } from "react";
import ChildComponent from "./ChildComponent";

//component CHA
const UseCallBackExample = () => {
  console.log("CHA re-rendered!"); // Xem nó có render lại không
  const [count, setCount] = React.useState(0);

  // Hàm này sẽ được tạo lại MỖI KHI ParentComponent re-render
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // Nên dùng functional update cho setState
  }, []); // Mảng rỗng nghĩa là hàm chỉ được tạo một lần duy nhất

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />{" "}
      {/* Truyền hàm xuống component con */}
      <button onClick={() => setCount(count + 1)}>Increase Count CHA</button>
    </div>
  );
};

export default UseCallBackExample;

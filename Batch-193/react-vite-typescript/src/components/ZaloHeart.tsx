import React from "react";
import { LuHeart } from "react-icons/lu";

const ZaloHeart = () => {
  const [count, setCount] = React.useState<number>(10);
  return (
    <div
      onClick={() => {
        //gias tri hie tai cong them 1 don vi
        setCount((n) => n + 1);
      }}
      className="flex items-center"
    >
      <LuHeart className="text-red-500" /> {count}{" "}
    </div>
  );
};

export default ZaloHeart;

import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const ButtonLike = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <button
      onClick={() => {
        setIsLike(!isLike);
      }}
      className={
        isLike
          ? `flex items-center bg-slate-950 py-1 px-3 w-[100px] text-sky-500`
          : `flex items-center bg-slate-950 py-1 px-3 w-[100px]  text-slate-100`
      }
    >
      {isLike ? <AiFillLike /> : <AiOutlineLike />} <span>Thích</span>
    </button>
  );
};

export default ButtonLike;

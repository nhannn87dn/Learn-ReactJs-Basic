import React from "react";

const Count = () => {
  /**
   * index là state, là trạng thái
   * giá trị 1, trong hàm useState, là giá trị khởi tạo
   * setIndex: là hàm để thay đổi giá trị của biến index
   *  (hay gọi là state index)
   */
  const [index, setIndex] = React.useState(0);
  console.log("rendering");

  return (
    <>
      <button
        onClick={() => {
          // setIndex(index + 1);
          // setIndex(index + 1);
          // setIndex(index + 1);
          setIndex((n) => n + 1); //1. snapshot index = 0
          setIndex((n) => n + 1); //2.
          setIndex((n) => n + 1); //3.
        }}
      >
        + 3
      </button>
      <h3>{index}</h3>
    </>
  );
};

export default Count;
import React from "react";

const ModalSimple = ({ isShow = false }: { isShow?: boolean }) => {
  const myClass = isShow ? "block" : "hidden";
  return (
    <div
      className={`${myClass} flex w-[300px] h-[200px] fixed inset-1 top-10 bg-indigo-700 text-white`}
    >
      <h2>My Modal</h2>
    </div>
  );
};

export default ModalSimple;

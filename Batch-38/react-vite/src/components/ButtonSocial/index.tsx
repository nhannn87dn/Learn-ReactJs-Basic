import React from "react";

type TButtonSocial = {
  label: string;
  icon?: React.ReactNode;
  varian?: string;
  onClick: () => void;
};

const ButtonSocial = ({ onClick, label, icon, varian = "" }: TButtonSocial) => {
  let myStyle = "bg-slate-900  border-slate-900 text-white";
  if (varian === "outline") {
    myStyle = "bg-white text-slate-900 border-slate-900";
  } else if (varian === "success") {
    myStyle = "bg-green-500 text-white border-green-500";
  }

  console.log("ButtonSocial Render");

  return (
    <button
      onClick={onClick}
      className={`${myStyle} flex border-2 justify-center items-center gap-x-3 py-3 px-4 rounded-full`}
    >
      {icon} Continue with {label}
    </button>
  );
};

export default ButtonSocial;

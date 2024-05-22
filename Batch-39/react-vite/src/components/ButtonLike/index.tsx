import React from "react";

const ButtonLike = () => {
  console.log("ButtonLike render");
  /**
   * false: chưa like
   * true: đã like
   */
  const [isLike, setIsLike] = React.useState(false);
  console.log("isLike", isLike);
  return (
    <button
      onClick={() => {
        console.log("clicked");
        setIsLike(!isLike); //thay đổi isLike ==> true
      }}
      className={isLike === true ? "btn_blue" : "btn_link"}
    >
      Thích
    </button>
  );
};

export default ButtonLike;

import { Bell, Heart } from "lucide-react";
import { useState } from "react";

const StateExample = () => {
  //const isShow = false;
  //cần sử dụng state để quản lý sự thay đổi giá trị của isShow
  const [isShow, setIsShow] = useState(false);
  /*
    isShow: gọi là state
    setIsShow: phương thức để thay đổi giá trị cho state isShow
    false: lá giá trị mặc định (khởi tạo) của state isShow
  */
  console.log("<<=== 🚀 isShow ===>>", isShow);

  const [isLike, setIsLike] = useState(false);

  return (
    <div className="notification-wrapper">
      <span
        className={`flex ${isLike === true ? "text-blue-500" : ""}`}
        onClick={() => {
          console.log("Nút like");
          setIsLike(!isLike);
        }}
      >
        <Heart /> Thích
      </span>
      <hr />

      <button
        onClick={() => {
          console.log("click vào Bell");
          setIsShow(true); // truyền giá trị mới, thì state isShow nhận giá trị đó
        }}
      >
        <Bell />
      </button>
      {isShow && (
        <div className="notification-list">
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StateExample;

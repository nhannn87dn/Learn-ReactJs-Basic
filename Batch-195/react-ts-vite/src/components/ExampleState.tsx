import { BellIcon } from "lucide-react";
import { useState } from "react";

const ExampleState = () => {
  const [isClicked, setIsClicked] = useState(false);
  // isClicked: được gọi là state variable (biến trạng thái)
  // setIsClicked: được gọi là state updater function (hàm cập nhật trạng thái)
  //useState: là một React Hook dùng để thêm state vào functional component
  //false: giá trị khởi tạo ban đầu của isClicked
  console.log("ExampleState rendered");
  console.log("<<=== 🚀 isClicked ===>>", isClicked);

  //NÚT LIKE
  const [isLiked, setIsLiked] = useState<boolean>(false);

  console.log("<<=== 🚀 isLiked ===>>", isLiked);

  //Đèn xanh đỏ
  const [color, setColor] = useState<string>("bg-green-500");

  console.log("<<=== 🚀 color ===>>", color);

  const [isShow, setIsShow] = useState<boolean>(false);

  console.log("<<=== 🚀 isShow ===>>", isShow);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Example State</h2>
      <p>Example 1</p>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className={isClicked ? "text-yellow-300" : "text-white"}
      >
        Click me
      </button>

      <button
        className={`bg-gray-800 border-gray-800 ${
          isLiked ? "text-blue-500" : "text-gray-100"
        }`}
        onClick={() => {
          //Dùng để thay đổi lại giá trị của state
          setIsLiked(!isLiked);
        }}
      >
        Thích
      </button>

      <p>Example 2: Đèn xanh đỏ</p>
      <div className={`w-[50px] h-[50px] flex ${color} rounded-full`}></div>
      <button
        onClick={() => {
          setColor("bg-green-500");
        }}
      >
        Xanh
      </button>
      <button
        onClick={() => {
          setColor("bg-red-500");
        }}
      >
        Đỏ
      </button>
      <button
        onClick={() => {
          setColor("bg-yellow-500");
        }}
      >
        Vàng
      </button>
      <p>Example 2: Tắt mở thông báo</p>
      <div className="notification">
        <p>
          <span
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <BellIcon />
          </span>
        </p>
        <div>
          {isShow && (
            <ul>
              <li>Thông báo 1</li>
              <li>Thông báo 2</li>
              <li>Thông báo 3</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExampleState;

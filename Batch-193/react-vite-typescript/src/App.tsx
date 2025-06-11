import { LuBell, LuHand, LuThumbsUp } from "react-icons/lu";
import "./App.css";
import ButtonV2 from "./components/ButtonV2";
import React, { useState } from "react";
import MusicPlay from "./components/MusicPlay";
import ZaloHeart from "./components/ZaloHeart";
function App() {
  //Có thể viết logic handler event ở đây
  const onHandleClickButtonPlay = () => {
    //Code logic xử lý khi người dùng click chuột
    console.log("Bạn đã click chuột lên nút Play");
  };

  const onHandlePlayChannel = (channel: number) => {
    console.log(`Đang xem VTVT ${channel}`);
  };

  //Quản lý trạng thái đóng và mở thông báo
  // const isShow = false;
  //Sư dụng state để quản lí trạng thái thay đổi của isShow
  const [isShow, setIsShow] = React.useState(false);
  console.log("<<=== 🚀 isShow ===>>", isShow);
  /**
   * isShow là state, với giá trị khởi tạo  = false
   * setIsShow là hàm để thay đổi giá trị của isShow
   * tên isShow, setIsShow --> bạn đặt tùy biến, nhưng
   * tuân thủ quy tắc
   */
  //let count = 0;
  const [count, setCount] = useState(0);

  console.log("app re-render");
  const [isLike, setIsLike] = useState(false);
  console.log("<<=== 🚀 isLike ===>>", isLike);
  return (
    <div className="container mx-auto my-5">
      <MusicPlay />
      <hr />
      <ZaloHeart />
      <div className="space-x-5 mb-5">
        <span
          onClick={() => {
            setIsLike(!isLike);
          }}
          className={`flex gap-x-[5px] items-center cursor-pointer ${
            isLike ? "text-blue-700" : ""
          }`}
        >
          <LuThumbsUp /> Thích
        </span>
      </div>
      <div className="space-x-5 mb-5">
        <button
          onClick={() => {
            setCount(count - 1); //bằng giá trị hiện tại + 1 đơn vị
          }}
        >
          - 1
        </button>{" "}
        <span>{count}</span>{" "}
        <button
          onClick={() => {
            setCount(count + 1); //bằng giá trị hiện tại + 1 đơn vị
          }}
        >
          + 1
        </button>
      </div>

      <div className="space-x-5">
        <button onClick={onHandleClickButtonPlay}>Play</button>
        <button onClick={() => onHandlePlayChannel(1)}>VTV1</button>
        <button onClick={() => onHandlePlayChannel(2)}>VTV2</button>
      </div>
      <div className="space-y-2 mt-5">
        <input
          onFocus={() => {
            console.log("Bạn đã đặt con trỏ vào input");
          }}
          onKeyDown={() => {
            console.log("Bạn vừa nhấn phím vào input");
          }}
          onChange={(event) => {
            //lấy value của input
            console.log(event.target.value);
          }}
          type="text"
        />
      </div>
      <form
        className="mt-5 space-x-3"
        onSubmit={(e) => {
          e.preventDefault(); //Ngăn form load page
          console.log("Bạn đã submit form");
          //Kiểm tra email hợp lệ
        }}
      >
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>
      <p>Bạn có thể truyền Event handler như một prop</p>
      <ButtonV2
        onHandleCLick={() => onHandlePlayChannel(3)}
        type="default"
        label="VTV 3"
      />
      <ButtonV2
        onHandleCLick={() => onHandlePlayChannel(8)}
        type="default"
        label="VTV 8"
      />
      <button
        onClick={() => {
          //Xử lý logic khi nhấn vào cái chuông
          ///setIsShow(true); //thay đổi giá trị của isShow thành true
          setIsShow(!isShow);
        }}
      >
        <LuBell />
      </button>
      {isShow && (
        <ul>
          <li>Notification 1</li>
          <li>Notification 2</li>
          <li>Notification 3</li>
          <li>Notification 4</li>
        </ul>
      )}
    </div>
  );
}

export default App;

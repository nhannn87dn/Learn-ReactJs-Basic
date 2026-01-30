import { Bell } from "lucide-react";
import { useState } from "react";

const ExampleState = () => {
  const [liked, setLiked] = useState<boolean>(false);
  /*
    liked: biến trạng thái (State)
    setLiked: hàm thay đổi biến trạng thái
    false: giá trị khởi tạo ban đầu (liked = false)
    */
  console.log("<<=== 🚀 liked ===>>", liked);

  ///state cho thông báo
  const [isShow, setIsShow] = useState<boolean>(false);
  console.log("<<=== 🚀 isShow ===>>", isShow);

  //const count = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <h1>ExampleState</h1>
      <button
        className={`${liked ? "text-orange-300" : ""}`}
        onClick={() => {
          console.log("clicked");
          setLiked(!liked); //thay đổi trạng thái ==> liked = true
        }}
      >
        Thích
      </button>
      <h2>Thông báo</h2>
      <div>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          <Bell />
        </button>
        {isShow && (
          <div className="notification_list">
            <ul>
              <li>Notification item 1</li>
              <li>Notification item 2</li>
              <li>Notification item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleState;

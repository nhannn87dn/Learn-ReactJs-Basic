import { useState } from "react";
import "./App.css";
import ButtonLike from "./components/ButtonLike";
import Gallery from "./components/Gallery";
import Notifications from "./components/Notifications";
import { CircleX, Heart } from "lucide-react";
import Attributes from "./components/homeworks/session03/Attributes";

const HeartButton = () => {
  const [currentColor, setCurrentColor] = useState("black");

  return (
    <button
      onClick={() => {
        setCurrentColor("red");
      }}
      style={{ color: currentColor }}
    >
      <Heart />
    </button>
  );
};
const SuggestSearch = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <input onClick={()=>{
        setIsShow(true)
      }} type="text" placeholder="Tìm kiếm" />
      {isShow && (
        <div style={{
          border: '2px solid red'
        }}>
          <button onClick={()=>{
            setIsShow(false)
          }}><CircleX /></button>
          <p>Tìm kiếm gần đây</p>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <main className="container">
      <HeartButton />
      {/* <Gallery /> */}
      <hr />
      <Notifications />
      <hr />
      <ButtonLike />
      <hr />
      <SuggestSearch />
      <hr/>
      <Attributes />
    </main>
  );
}

export default App;

/*
TASK 1;
Tạo một component HeartButton để mô phỏng lại
Nút thả tim như Zalo.
- Mặc định lúc đầu tim màu đen
- Click vào thì nó thành màu đỏ

=======
Task 2
- Tạo một components SuggestSearch gồm 2 phần
+ Input text và một thẻ div với nội dung "Tìm kiếm gần đây"
- Mặc định thẻ div chưa xuất hiện
- Khi click vào input thì thẻ div xuất hiện.
*/

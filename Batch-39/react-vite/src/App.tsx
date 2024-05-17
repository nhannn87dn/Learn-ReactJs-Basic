import "./App.css";
import Button from "./components/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Attributes from "./components/Attributes";
import Todo from "./components/Todo";
import TodoItem from "./components/Todo/TodoItem";
import ButtonV2 from "./components/ButtonV2";
import ProcessBar from "./components/ProcessBar";

// function sum(a,b=0){
//   return a+b;
// }
// sam(1,4)

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ProcessBar
        percent={20}
        label="Bandwidth"
        bwbg="bg-red-600"
        pcbg="bg-red-500"
      />
      <ProcessBar
        percent={50}
        label="Storage"
        bwbg="bg-sky-600"
        pcbg="bg-sky-500"
      />
      <ProcessBar
        percent={70}
        label="User"
        bwbg="bg-green-600"
        pcbg="bg-green-500"
      />
      <div>
        <h2>Ví dụ về TailwindCss</h2>
        <button className="bg-orange-500 text-white py-2 px-3 rounded hover:bg-orange-700">
          Default
        </button>
      </div>

      <Button icon={<FaShoppingCart />} label="Thêm vào giỏ hàng" />
      <Button type="btn_dark" icon={<FaHeart />} label="Yêu thích" />
      <Button label="Đăng ký" />
      <Button type="btn_detail" label="Xem chi tiết" />
      <hr />
      <h2>Button V2</h2>
      <ButtonV2 label="Login" />
      <ButtonV2 type="btn_dark" label="Logout" />
      <hr />
      <Attributes />
      <hr />
      <Todo>
        <TodoItem text="Giặt đồ" />
        <TodoItem text="làu nhà" />
      </Todo>
      <button style={{ fontSize: 40 }}>Login</button>
    </>
  );
}

export default App;

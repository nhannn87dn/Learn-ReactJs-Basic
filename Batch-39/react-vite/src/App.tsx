import "./App.css";
import Button from "./components/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Attributes from "./components/Attributes";
import Todo from "./components/Todo";
import TodoItem from "./components/Todo/TodoItem";
import ButtonV2 from "./components/ButtonV2";
import ProcessBar from "./components/ProcessBar";
import ConditionalRendering from "./components/ConditionalRendering";
import AccessoriesRelate from "./components/AccessoriesRelate";
import { todos, todosV2 } from "./data/todos";

// function sum(a,b=0){
//   return a+b;
// }
// sam(1,4)

function App() {
  return (
    <>
      <div className="container mx-auto">
        <ConditionalRendering />
        <hr />
        <AccessoriesRelate />
      </div>

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
      <h2>Todo List</h2>
      <Todo>
        {/* item: là phần tử hiện tại đang lặp qua */}
        {/* index: là vị trí index của phần tử trong mảng */}
        {/* 
        Todo_1
        Todo_2
        Todo_3
         */}
        {todos.map((item, index) => {
          return <TodoItem key={`Todo_${item.id}`} text={item.title} />;
        })}

        {/* <TodoItem text={todos[1].title} />
        <TodoItem text={todos[2].title} /> */}
      </Todo>
      <h2>Todo2</h2>
      <Todo>
        {/* 
        Thêm một Prefix_ trước key
        Todo2_1
        Todo2_2
        Todo2_3
         */}
        {todosV2.map((item, index) => {
          return <TodoItem key={`Todo2_${item.id}`} text={item.title} />;
        })}
      </Todo>
    </>
  );
}

export default App;

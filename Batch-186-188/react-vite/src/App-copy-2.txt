import "./App.css";
import AccessoriesList from "./components/AccessoriesList";
import AttributesV2 from "./components/AttributesV2";
//import Attribute from "./components/Attributes";
// import ButtonAddToCart from "./components/ButtonAddToCard";
//import ButtonCallCenter from "./components/ButtonCallCenter";
// import Button from "./components/Button";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import ListItem from "./components/List/ListItem";
// import List from "./components/List";
// import BlockUI4 from "./components/BlockUI4";
import BlockUI1 from "./components/BlockUI1";
import ListItem from "./components/List/ListItem";

// const ListItem = ({
//   content,
//   isDone = false,
// }: {
//   content: string;
//   isDone?: boolean;
// }) => {
//   return (
//     <li>
//       {content} {isDone && "✔"}
//     </li>
//   );
// };

// Biến tất cả dữ liệu của phần UI thành một mảng
// array object
const todos = [
  { id: 1, content: "Quet nha", isDone: true },
  { id: 2, content: "Giat do", isDone: true },
  { id: 3, content: "Nau com", isDone: true },
  { id: 4, content: "Xem Tivi", isDone: false },
  { id: 5, content: "Di ngu", isDone: false },
];

const ButtonChannel = ({
  label,
  onHandleClick,
}: {
  label: string;
  onHandleClick: () => void;
}) => {
  return <button onClick={onHandleClick}>{label}</button>;
};

function App() {
  const isShow = true;
  console.log("App render");

  const onHandleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit Form");
  };
  const onHandleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //lấy được giá trị từ input
    console.log(e.target.value);
  };

  const onHandleClickAddToCart = () => {
    console.log("Thêm giỏ hàng thành công");
  };

  const onHandleClickChannel = (channel: string) => {
    console.log(`Ban dang chọn: ${channel}`);
  };

  return (
    <div className="container mx-auto">
      <ButtonChannel
        onHandleClick={() => {
          onHandleClickChannel("vtv1");
        }}
        label="vtv1"
      />
      <ButtonChannel
        onHandleClick={() => {
          onHandleClickChannel("vtv2");
        }}
        label="vtv2"
      />
      <hr />

      <button
        onClick={() => {
          onHandleClickChannel("vtv1");
        }}
      >
        VTV1
      </button>
      <button
        onClick={() => {
          onHandleClickChannel("vtv2");
        }}
      >
        VTV2
      </button>
      <button
        onClick={() => {
          onHandleClickChannel("vtv3");
        }}
      >
        VTV3
      </button>

      <form onSubmit={onHandleSubmitForm}>
        <input onChange={onHandleChangeInput} placeholder="Email" type="text" />
        <label>
          <input
            onChange={(e) => {
              console.log(e.target.checked);
            }}
            value={1}
            type="checkbox"
            className="checkbox"
          />{" "}
          Đồng ý với điều khoản
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button className="btn btn-primary" onClick={onHandleClickAddToCart}>
        Add to Cart
      </button>

      <div
        onMouseEnter={() => {
          console.log("Rê chuột lên Div");
        }}
        style={{
          backgroundColor: "yellow",
          width: 50,
          height: 50,
        }}
      >
        Tôi là thẻ Div
      </div>

      <AttributesV2 />
      <AccessoriesList />
      <ul>
        {/* <ListItem content="Quet nha" isDone={true} />
        <ListItem content="Rua chen" isDone={true} />
        <ListItem content="Nau com" /> */}
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <ListItem
                key={`todoOne_${todo.id}`}
                content={todo.content}
                isDone={todo.isDone}
              />
            );
          })}
      </ul>

      <ul>
        {/* <ListItem content="Quet nha" isDone={true} />
        <ListItem content="Rua chen" isDone={true} />
        <ListItem content="Nau com" /> */}
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <ListItem
                key={`todoTwo_${todo.id}`}
                content={todo.content}
                isDone={todo.isDone}
              />
            );
          })}
      </ul>

      {isShow && <BlockUI1 />}
      {/* <div
        className="block-bg p-5 flex gap-x-3"
        style={{
          backgroundColor: "#F4F7FC",
        }}
      >
        <BlockUI4
          count={24599}
          chartData={[
            { dayName: "MON", bgColor: "bg-red-500", percent: "40%" },
            { dayName: "TUE", bgColor: "bg-green-500", percent: "30%" },
            { dayName: "WED", bgColor: "bg-yellow-500", percent: "60%" },
          ]}
        />
        <BlockUI4
          count={15699}
          chartData={[
            { dayName: "MON", bgColor: "bg-red-500", percent: "40%" },
            { dayName: "TUE", bgColor: "bg-green-500", percent: "30%" },
            { dayName: "WED", bgColor: "bg-yellow-500", percent: "60%" },
          ]}
        />
      </div>
      <List>
        <ListItem content="Item 1" />
        <ListItem content="Item 2" />
        <ListItem content="Item 3" />
      </List>

      <Attribute />
      <Button
        icon={<FaShoppingCart />}
        bgColor="btn-primary"
        label="Thêm vào giỏ hàng"
      />
      <Button icon={<FaHeart />} bgColor="btn-danger" label="Yêu thích" /> */}

      {/* <button className="btn btn-primary">Default button</button>
      <h2>heading 2</h2>
      <h2>Heading 2 222</h2>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-[15px] py-1 rounded">
        Tailwind
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-[15px] py-1 rounded">
        By Now
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="button">Style Component</h1>

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <ButtonAddToCart />
      {/* <ButtonCallCenter /> */}
      {/* <button
        style={{
          backgroundColor: "#f80",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Login
      </button> */}
    </div>
  );
}

export default App;

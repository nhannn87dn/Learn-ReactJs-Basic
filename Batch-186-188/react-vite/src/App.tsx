import "./App.css";
import Attribute from "./components/Attributes";
// import ButtonAddToCart from "./components/ButtonAddToCard";
//import ButtonCallCenter from "./components/ButtonCallCenter";
import Button from "./components/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ListItem from "./components/List/ListItem";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header>
        <div>Logo</div>
        <nav></nav>
        gfgf
      </Header>

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
      <Button icon={<FaHeart />} bgColor="btn-danger" label="Yêu thích" />

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

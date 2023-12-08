import "./App.css";
import Button from "./components/Button";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ProductCard from "./components/ProductCard";
import Service from "./components/Services";
import { FaShoppingCart, FaPhone } from "react-icons/fa";

//Cách định nghĩa một component
// Cách đặt tên là theo Pascal Case
function HelloWorld() {
  return <h1>Hello World</h1>;
}

function Contact() {
  return (
    <div>
      <strong>Call us today</strong>
      <div>1900-111000</div>
      <p>We're available 24/7, 365 days a year.</p>
      <Button />
    </div>
  );
}

const ButtonAddToCart = () => {
  return <button>Thêm vào giỏ hàng</button>;
};

const ButtonCall = () => {
  return <button>Gọi tư vấn</button>;
};

/**
 * App --> ko được gọi là hàm trong React
 * ==> gọi là Function Component
 */
function App() {
  //Cú pháp JSX
  const h1 = <h1>Hello Heading 1</h1>;

  const name = "Nhan";

  const age = 35;

  return (
    <>
      <List>
        <ListItem content="Lau nha" />
        <ListItem content="Hut bui " />
        <ListItem content="Rua chen" />
      </List>
      <List></List>
      <button className="button"> hello</button>
      {h1}
      <h3>
        Toi ten la {name} Nam nay toi {age} tuoi
      </h3>
      {5 + 5}
      {console.log("log jsx")}
      {/* Cách gọi một function */}
      <HelloWorld />
      <Contact />
      <Button />
      <div
        style={{
          height: 200,
          border: "1px solid #000",
        }}
      >
        <h3>Home Page</h3>
        <Button />
      </div>
      <div
        style={{
          height: 200,
          border: "1px solid #000",
        }}
      >
        <h3>Products Page</h3>
        <Button />
      </div>
      <Service />
      <ProductCard />
      <Button icon={<FaPhone />} label="Gọi lại tư vấn" />
      <Button icon={<FaShoppingCart />} label="Thêm vào giỏ hàng" />
      <Button />
    </>
  );
}

export default App;

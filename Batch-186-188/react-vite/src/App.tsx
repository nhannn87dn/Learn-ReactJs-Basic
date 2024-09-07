import "./App.css";
//Nhung component Button vao de su dung
import Button from "./components/Button";
import Profile from "./components/Profile";

// Được gọi làm javascript
// function sum(a: number, b: number) {
//   return a + b;
// }

// Đây được gọi là function component
// function Button() {
//   return <button>Button</button>;
// }
// arrow function component
const ButtonArrow = () => {
  return <button>Button</button>;
};

const ProductList = () => {
  return (
    <ul>
      <li>
        <Button />
      </li>
      <li>1</li>
      <li>1</li>
    </ul>
  );
};

function ListItem() {
  return <li>Item</li>;
}

function Link() {
  return <a href="https://react.dev">React</a>;
}

function App() {
  const name = "Nhan";
  const h1 = <p>Hello {name}</p>;

  const pheptinh = <p>Mot cong mot = {1 + 1}</p>;

  return (
    <>
      <Profile />
      {4 / 2}
      {h1}
      {console.log("Hello ----")}
      {pheptinh}
      <ProductList />
      <h1>Hello React</h1>
      <Button />
      <ButtonArrow />
      <Link />
      <Link />
      <Link />
      <Link />
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

        <ListItem />
      </ul>
    </>
  );
}

export default App;

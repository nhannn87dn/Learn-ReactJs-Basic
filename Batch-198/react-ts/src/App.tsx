import "./App.css";
import ButtonScriber from "./components/ButtonScriber";
import Profile from "./components/Profile";
import HelloWorld from "./components/HelloWorld";
import Picture from "./components/Pricture";
import ProductName from "./components/ProductName";
import Price from "./components/Price";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Cách dùng của component function</p>
      <Profile />
      <Profile />
      <Profile />
      <ButtonScriber />
      <img src="images/ex-1.png" alt="Example 1" />
      <img src="" alt="" />
      <label htmlFor="text-input">
        <input id="text-input" type="text" className="radio" />
      </label>
      <input type="text" className="text" />
      <HelloWorld />
      <Picture />
      <ProductName />
      <Price />
      {5 + 5}
    </>
  );
}

export default App;

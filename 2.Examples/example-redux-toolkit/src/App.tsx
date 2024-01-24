import "./App.css";
import { Bank } from "./redux/features/bank/Bank";
import { Counter } from "./redux/features/counter/Counter";
import { Products } from "./redux/features/products/Products";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Bank />
      <hr />
      <Products />
    </>
  );
}

export default App;

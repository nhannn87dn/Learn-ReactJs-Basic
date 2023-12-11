import "./App.css";
import Attributes from "./components/Attributes";
import BlockUI from "./components/BlockUI";
import ProductsList from "./components/ProductsList";
import TodoList from "./components/TodoLists";
import Videos from "./components/Videos";

/**
 * App --> ko được gọi là hàm trong React
 * ==> gọi là Function Component
 */
function App() {
  console.log("App render");
  const isShowTotdo = true;
  return (
    <>
      <Attributes />
      <BlockUI />
      <Videos />
      <ProductsList />
      {isShowTotdo && <TodoList />}
    </>
  );
}

export default App;

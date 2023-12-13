import "./App.css";
import Attributes from "./components/Attributes";
import BlockUI from "./components/BlockUI";
import Posts from "./components/Posts";
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
    <div className="container mx-auto">
      <h1 className="text-3xl text-orange-600 font-bold underline">
        Hello world!
      </h1>

      <button className="btn btn_primary">Primary</button>
      <button className="btn">Default</button>

      <button className="btn pyc-1 fz1">Login</button>

      <Posts />
      <Attributes />
      <BlockUI />
      <Videos />
      <ProductsList />
      {isShowTotdo && <TodoList />}
    </div>
  );
}

export default App;

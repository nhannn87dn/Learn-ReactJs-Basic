import "./App.css";
import Attributes from "./components/Attributes";
import BlockUI from "./components/BlockUI";
import EventHandles from "./components/EventHandles";
import Posts from "./components/Posts";
import ProductsList from "./components/ProductsList";
import RankStars from "./components/RankStars";
import SimpleCarousel from "./components/SimpleCarousel";
import StateExample from "./components/StateExample";
import TableParams from "./components/TableParams";
import TodoList from "./components/TodoLists";
import Videos from "./components/Videos";

/**
 * App --> ko được gọi là hàm trong React
 * ==> gọi là Function Component
 */
function App() {
  console.log("App render");

  return (
    <div className="container mx-auto">
      {/* <EventHandles /> */}
      {/* <StateExample /> */}
      <hr />

      <RankStars />

      <TableParams />

      <SimpleCarousel />

      {/* <Posts /> */}
      <Attributes />
      {/* <BlockUI />
      <Videos />
      <ProductsList />
      {isShowTotdo && <TodoList />} */}
    </div>
  );
}

export default App;

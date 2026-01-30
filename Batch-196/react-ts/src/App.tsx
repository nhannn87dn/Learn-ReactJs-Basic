import "./App.css";
import ArticleList from "./components/ArticleList";
import ConditionalRendering from "./components/ConditionalRendering";
import ExampleEventHanding from "./components/ExampleEventHanding";
import ExampleState from "./components/ExampleState";
import Policy from "./components/Policy";
import ProductList from "./components/Product/ProductList";
import Progress from "./components/Progress";
import RenderListExample from "./components/RenderListExample";
import Resume from "./components/Resume";
import SimpleLikeConditional from "./components/SimpleLikeConditional";
import UINotifications from "./components/UINotifications";

/**
 * Tất cả UI đều phải
 * đưa vào App component
 * để hiển thị ra trình duyệt
 */
function App() {
  //Đưa UI vào trong return
  return (
    <>
      <ExampleState />
      <ExampleEventHanding />
      <div className="container mx-auto">
        <Resume />
      </div>
      <button
        style={{
          padding: "8px 16px",
          border: "none",
          backgroundColor: "#f80",
          color: "#fff",
          borderRadius: 6,
        }}
      >
        Login
      </button>
      <button className="bg-indigo-500 text-white py-[8px] px-[16px] rounded-md hover:bg-indigo-600">
        Logout
      </button>
      <ArticleList />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Policy />
      <Progress />
      <ConditionalRendering />
      <UINotifications />
      <div>
        <SimpleLikeConditional />
      </div>
      <RenderListExample />
      <ProductList />
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */

import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Policy from "./components/Policy";
import ProductList from "./components/Product/ProductList";
import Progress from "./components/Progress";
import RenderListExample from "./components/RenderListExample";
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
      <h1 className="head">Hello, React!</h1>
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

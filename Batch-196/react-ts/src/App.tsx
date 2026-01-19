import "./App.css";
import Tag from "./components/Tag";
import Button from "./components/Button";
import Image from "./components/Image";
import JsxExample from "./components/JsxExample";
import ButtonAddToCart from "./components/ButtonAddToCart";

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
      <JsxExample />
      <Tag />
      <Tag />
      <Tag />

      <Button />
      <ButtonAddToCart />
      <Image />
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */

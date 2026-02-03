import React from "react";
import "./App.css";
import UseEffectExample from "./components/UseEffectExample";

/**
 * Tất cả UI đều phải
 * đưa vào App component
 * để hiển thị ra trình duyệt
 */
function App() {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <>
      {isShow && <UseEffectExample name="Aptech Softech" />}
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */

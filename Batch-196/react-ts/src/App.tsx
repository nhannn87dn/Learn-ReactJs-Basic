import "./App.css";
import Attribute from "./components/Attribute";
import FormExample from "./components/FormExample";
import GallerySimple from "./components/GallerySimple";
import LoginForm from "./components/LoginForm";
import ReactHookFormExample from "./components/ReactHookFormExample";

/**
 * Tất cả UI đều phải
 * đưa vào App component
 * để hiển thị ra trình duyệt
 */
function App() {
  //Đưa UI vào trong return
  return (
    <>
      <LoginForm />
      <br />
      <ReactHookFormExample />
      <br />
      <FormExample />
      <Attribute />
      <GallerySimple />
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */

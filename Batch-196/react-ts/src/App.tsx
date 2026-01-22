import "./App.css";
import Button from "./components/Button";
import { ShoppingCart, Phone } from "lucide-react";
import ButtonPlay from "./components/ButtonPlay";
import Attribute from "./components/Attribute";

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
      <div>
        <Attribute />
      </div>
      <div>
        <ButtonPlay bgColor="green" label="VTV 1" />
        <ButtonPlay bgColor="red" label="VTV 2" />
        <ButtonPlay bgColor="blue" label="VTV 3" />
      </div>

      <Button
        type="default"
        name="Thêm vào giỏ hàng"
        icon={<ShoppingCart size={16} />}
      />
      <Button type="dark" name="Gọi lại tư vấn" icon={<Phone size={16} />} />
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */

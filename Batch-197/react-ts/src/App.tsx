import { PhoneCall, ShoppingCart } from "lucide-react";
import "./App.css";
import Button from "./components/Button";
import Policy from "./components/Policy";

function App() {
  return (
    <>
      <Button icon={<ShoppingCart />} label="Thêm vào giỏ hàng" />
      <Button type="orange" icon={<PhoneCall />} label="Gọi lại tư vấn" />
      <Policy />
    </>
  );
}

export default App;

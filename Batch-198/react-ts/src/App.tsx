import "./App.css";
import ProductList from "./components/homeworks/session02/ProductList";
import Profile from "./components/homeworks/session02/Profile";
import Button from "./components/Button";
import Channel from "./components/Channel";
import { Phone, ShoppingCart } from "lucide-react";
function App() {
  return (
    <>
      <ProductList />
      <Profile />
      <Button name="Login" />
      <Button name="Logout" />
      <hr />
      <Button icon={<ShoppingCart />} bgColor="#f80" name="Thêm vào giỏ hàng" />
      <Button icon={<Phone />} bgColor="#212121" name="Gọi lại tư vấn" />
      <hr />
      <Channel n="VTV 1" />
      <Channel n="VTV 2" />
    </>
  );
}

export default App;

/**
 Tạo một component tên là SayHello
 - Hiển thị ra bên ngoài 2 lần component này
 - Khi truyền vào name="Tuấn" --> Chào Tuấn
 - Khi truyền vào name="Minh" --> Chào Minh
 */

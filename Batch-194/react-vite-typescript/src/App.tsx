import "./App.css";
import Button from "./components/Button";
import { ShoppingCart, Heart } from "lucide-react";
import Tags from "./components/Tags";
import Policy from "./components/Policy";
function App() {
  const handleClickButton = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <Button
        onHandleClick={handleClickButton}
        icon={<ShoppingCart />}
        label="Thêm vào giỏ hàng"
      />
      <Button
        onHandleClick={handleClickButton}
        icon={<Heart />}
        label={"Yêu thích"}
      />
      <hr />
      <Tags />
      <hr />
      <Policy />
    </div>
  );
}

export default App;

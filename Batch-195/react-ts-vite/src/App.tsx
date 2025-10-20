import { Heart, ShoppingCart } from "lucide-react";
import "./App.css";
//import Button from "./components/Button";
import ButtonV1 from "./components/ButtonV1";
import SayHello from "./components/SayHello";
import Card from "./components/Card";

// cont sum = (a,b){

// }
// sum(2,4)

//component App
function App() {
  return (
    <div>
      <Card title="Thông số sản phẩm">
        <p>Body cua thong so</p>
      </Card>

      <Card title="Goi lai tu van">
        <p>Body Goi tu van</p>
      </Card>
    </div>

    /* <SayHello name="Nhan" />
      <SayHello name="Tuan" />
      <hr />

      <ButtonV1 icon={<ShoppingCart />} bgColor="#f80" label={"Login"} />
      <ButtonV1 icon={<Heart />} bgColor="#212121" label={"Logout"} /> */
    /* <Button bgColor="bg-orange-500" icon={<ShoppingCart />} label="Login" />
      <Button bgColor="bg-gray-700" icon={<Heart />} label="Logout" /> */
  );
}

export default App;

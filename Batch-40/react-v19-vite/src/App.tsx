import "./App.css";
import Attributes from "./components/Attributes";
import ButtonProp from "./components/ButtonProp";
import { ShoppingCart, Heart } from "lucide-react";

function App() {
  return (
    <main className="container mx-auto">
      <Attributes />
      <div className="actions flex gap-x-3">
        <ButtonProp
          type="primary"
          icon={<ShoppingCart size={16} />}
          label="Add to Cart"
        />
        <ButtonProp icon={<Heart size={16} />} label="Like" />
        <ButtonProp label="Đăng ký" />
        <ButtonProp type="outline" label="Xem thêm" />
        <ButtonProp type="ghost" label="Ghost" />
      </div>
    </main>
  );
}

export default App;

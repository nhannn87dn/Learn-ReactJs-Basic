import "./App.css";
import ButtonA from "./components/ButtonA";
import ButtonB from "./components/ButtonB";
import { AtSign } from "lucide-react";
import { BrushCleaning } from "lucide-react";
/*
Code một component có tên là HelloReact
Hiển thị ra ngoài: Hello React !
*/

function App() {
  return (
    <div>
      <AtSign />{" "}
      <BrushCleaning style={{ color: "red" }} height={40} width={40} />
      <img height={150} src="images/vivo.jpg" alt="" />
      <img
        height={150}
        src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/231776/elio-es045-01-nam-thumb-fix-600x600.jpg"
        alt=""
      />
      <ButtonA />
      <ButtonB />
    </div>
  );
}

export default App;

import "./App.css";
import { User, Search } from "lucide-react";
import Hotline from "./components/Hotline";

function App() {
  return (
    <>
      <Hotline />
      <User color={"red"} /> <Search size={64} />
      <img src="icon-05.png" alt="" />
    </>
  );
}

export default App;

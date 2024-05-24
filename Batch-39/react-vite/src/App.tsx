import "./App.css";
import Attributes from "./components/Attributes";
import FormExample from "./components/FormExample";
import Tags from "./components/Tags";

function App() {
  console.log("app render");

  return (
    <div className="container mx-auto">
      <Attributes />
      <Tags />
      <FormExample />
    </div>
  );
}

export default App;

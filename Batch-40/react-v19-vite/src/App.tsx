import "./App.css";
import Attributes from "./components/Attributes";
import Tags from "./components/Tags";
import SimpleCarousel from "./components/SimpleCarousel";
import ReactHookFormExample from "./components/ReactHookFormExample";

function App() {
  return (
    <div className="container mx-auto my-10">
      <Attributes />
      <Tags />
      <SimpleCarousel />
      <ReactHookFormExample />
    </div>
  );
}

export default App;

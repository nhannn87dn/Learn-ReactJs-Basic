import Attributes from "./components/Attributes";
import Excersie03 from "./components/Excersie03";
import Exercise04 from "./components/Exercise04";

function App() {
  console.log("App re-render");

  return (
    <div className="container mx-auto">
      <Attributes />
      <Excersie03 />
      <Exercise04 />
    </div>
  );
}

export default App;

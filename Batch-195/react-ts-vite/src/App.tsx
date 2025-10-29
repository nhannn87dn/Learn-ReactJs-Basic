import "./App.css";
import ExampleEventHandle from "./components/ExampleEventHandle";
import ExampleState from "./components/ExampleState";
import Session4Exercise6 from "./Homeworks/Session4Exercise6";
import Session4ProductList from "./Homeworks/Session4ProductList";
//component App
function App() {
  return (
    <div className="container">
      <Session4Exercise6 />
      <Session4ProductList />
      <ExampleState />
      <ExampleEventHandle />
    </div>
  );
}

export default App;

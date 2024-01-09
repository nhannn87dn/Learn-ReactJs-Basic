import "./App.css";
import MyCV from "./components/MyCV";

function App() {
  console.log("App Render");
  return (
    <div className="container mx-auto">
      <MyCV />
    </div>
  );
}

export default App;

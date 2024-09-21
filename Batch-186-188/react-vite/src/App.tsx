import "./App.css";
import SimpleForm from "./components/SimpleForm";

function App() {
  console.log("render");

  return (
    <div className="container mx-auto">
      <SimpleForm />
    </div>
  );
}

export default App;

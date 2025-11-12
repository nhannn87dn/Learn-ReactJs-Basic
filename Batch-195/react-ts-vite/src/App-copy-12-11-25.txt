import "./App.css";
import AttributeColor from "./components/AttributeColor";
import ExampleForm from "./components/ExampleForm";
import ExampleFormV2 from "./components/ExampleFormV2";
import ExampleReactHookForm from "./components/ExampleReactHookForm";
import SimpleGallery from "./components/SimpleGallery";
//component App
function App() {
  return (
    <div className="container">
      <AttributeColor />
      <SimpleGallery />
      <ExampleForm />
      <ExampleFormV2 />
      <ExampleReactHookForm />
    </div>
  );
}

export default App;

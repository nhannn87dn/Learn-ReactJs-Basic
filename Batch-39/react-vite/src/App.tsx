import "./App.css";
import Attributes from "./components/Attributes";
import FormExample from "./components/FormExample";
import FormReactHook from "./components/FormReactHook";
import FormReactHookValidation from "./components/FormReactHookValidation";
import StartRating from "./components/StarRating";
import Tags from "./components/Tags";

function App() {
  console.log("app render");

  return (
    <div className="container mx-auto">
      <Attributes />
      <Tags />
      <FormExample />
      <StartRating />
      <FormReactHook />
      <hr />
      <FormReactHookValidation />
    </div>
  );
}

export default App;

import "./App.css";
import AddToCart from "./components/AddToCart";
import AttributesV2 from "./components/AttributesV2";
import ManualForm from "./components/ManualForm";
import ReactHookForm from "./components/ReactHookForm";
import ReactHookFormValidation from "./components/ReactHookFormValidation";

function App() {
  return (
    <div className="container mx-auto my-5">
      <AddToCart />
      <AttributesV2 />
      <hr />
      <ManualForm />
      <hr />
      <h1 className="text-2xl font-bold my-5">React Hook Form</h1>
      <ReactHookForm />
      <hr />
      <h1 className="text-2xl font-bold my-5">React Hook Form Validation</h1>
      <ReactHookFormValidation />
    </div>
  );
}

export default App;

// import Attributes from "./components/Attributes";
// import Excersie03 from "./components/Excersie03";
// import Exercise04 from "./components/Exercise04";
import FormMultiField from "./components/FormMultiField";
import FormReactHookForm from "./components/FormReactHookForm";
import FormSimpleExample from "./components/FormSimpleExample";

function App() {
  console.log("App re-render");

  return (
    <div className="container mx-auto">
      {/* <Attributes />
      <Excersie03 />
      <Exercise04 /> */}
      <FormSimpleExample />
      <hr />
      <FormMultiField />
      <hr />
      <FormReactHookForm />
    </div>
  );
}

export default App;

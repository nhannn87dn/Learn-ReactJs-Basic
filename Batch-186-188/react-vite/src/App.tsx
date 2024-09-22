import "./App.css";
import LoginFormReactHook from "./components/LoginFormReactHook";
import SimpleForm from "./components/SimpleForm";

function App() {
  console.log("render");

  return (
    <div className="container mx-auto">
      <h2>React Hook Form</h2>
      <LoginFormReactHook />
      <SimpleForm />
    </div>
  );
}

export default App;

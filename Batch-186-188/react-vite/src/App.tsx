import "./App.css";
import CreateAccountForm from "./components/CreateAccountForm";
import LoginFormReactHook from "./components/LoginFormReactHook";
import SimpleForm from "./components/SimpleForm";

function App() {
  console.log("render");

  return (
    <div className="container mx-auto">
      <h2>Create Account Form</h2>
      <CreateAccountForm />
      <h2>React Hook Form</h2>
      <LoginFormReactHook />
      <SimpleForm />
    </div>
  );
}

export default App;

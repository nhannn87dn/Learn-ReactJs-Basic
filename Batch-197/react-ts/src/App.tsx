import "./App.css";

import ReactHookFormExample from "./components/ReactHookFormExample";
import ReactHookFormExampleZod from "./components/ReactHookFormExampleZod";

function App() {
  return (
    <main className="container mx-auto">
      <h2>HTML5 Validation + React Hook Form</h2>
      <ReactHookFormExample />
      <h2>Zod Validation + React Hook Form</h2>
      <ReactHookFormExampleZod />
    </main>
  );
}

export default App;

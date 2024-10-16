import ReduxExamples from "./SessionsExamples/Session-10-Redux-Zustand/ReduxExamples";

function Signup() {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      {/* <UpdateState /> */}
      <ReduxExamples />
    </div>
  );
}

export default App;

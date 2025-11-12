import { useBrowserWidth } from "./hooks/useBrowserWith";

//component App
function App() {
  const browserWidth = useBrowserWidth();

  return (
    <div className="container">
      <h1>Browser width: {browserWidth}px</h1>
      {/* <CounterWithReducer /> */}
    </div>
  );
}

export default App;

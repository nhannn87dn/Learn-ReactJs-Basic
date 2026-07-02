import "./App.css";
import { useBrowserWidth } from "./hooks/useBrowserWidth";
// import UseMemoExample from "./components/UseMemoExample";

function App() {
  const browserWidth = useBrowserWidth();

  return (
    <main className="container mx-auto">
      <h1>Browser Width: {browserWidth}px</h1>
      {/* <UseMemoExample /> */}
    </main>
  );
}

export default App;

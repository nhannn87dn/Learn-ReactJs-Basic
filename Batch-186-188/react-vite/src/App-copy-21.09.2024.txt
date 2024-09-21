import "./App.css";
import { useState } from "react";
import CarouselSimple from "./components/CarouselSimple";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState<number>(1);
  const [isShow, setIsShow] = useState(false);

  console.log("render", isShow);

  return (
    <div className="container mx-auto">
      <TodoList />
      <hr />

      <CarouselSimple />
      <hr />
      <h1>State</h1>

      <button
        onClick={() => {
          console.log("Button Toggle");
          setIsShow(!isShow);
        }}
        className="btn btn-primary"
      >
        Toggle
      </button>
      <hr />
      {isShow && (
        <div className="component_count">
          <h2>Count: {count}</h2>
          <button
            onClick={() => {
              console.log("Button clicked");
              setCount(count + 1);
            }}
            className="btn btn-primary"
          >
            Click me
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

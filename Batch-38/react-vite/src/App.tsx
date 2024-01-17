import React, { useState, useRef } from "react";
import "./App.css";
//import CallBackExample from "./components/CallBackExample";
import UseMemoExample from "./components/UseMemoExample";
import Child from "./components/Child";
import { UserProvider } from "./context/userContext";
import { useBrowserWidth } from "./hooks/useBrowserWidth";

function App() {
  console.log("App Render");

  const [isShow, setIsShow] = useState(false);

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value = "Hello, React!";
  };

  const audioRef = useRef();

  const user = { id: 1, name: "Nhanv2" };

  // const [count, setCount] = useState(0);

  //user
  const ACTION_UP = "up";
  const ACTION_DOWN = "down";

  const reducer = (state: number, action: string) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      default:
        throw new Error(`Action invalid`);
    }
  };
  const [count, dispatch] = React.useReducer(reducer, 0);

  const bWidth = useBrowserWidth();

  return (
    <div className="container mx-auto">
      <h1>{bWidth}</h1>
      {bWidth <= 525 ? <span>UI MObile</span> : <span>UI Desktop</span>}
      {count}

      <button
        onClick={() => {
          dispatch(ACTION_UP);
        }}
      >
        +1
      </button>

      <UserProvider user={user}>
        <Child />
      </UserProvider>
      <button
        className="btn"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Toogle
      </button>
      {isShow && <UseMemoExample />}

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Value</button>
      <audio
        ref={audioRef}
        src="https://nhannn87dn.github.io/audio-player-app/media/AnhSaoVaBauTroi.mp3"
      ></audio>
      <button
        onClick={() => {
          audioRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          audioRef.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
}

export default App;

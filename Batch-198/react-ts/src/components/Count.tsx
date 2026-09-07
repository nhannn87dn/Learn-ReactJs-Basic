//import { useState } from "react";
import { useCount } from "../stores/count-store";

const Count = () => {
  //const [count, setCount] = useState(0);
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount()}>
        Increase
      </button>
    </div>
  );
};

export default Count;

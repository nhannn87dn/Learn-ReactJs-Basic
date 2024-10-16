import React, { useState, useCallback } from "react";
import TodoSimple from "../TodoSimple";

const CallBackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  console.log("CallBackExample");

  const increment = () => {
    setCount((c) => c + 1);
  };

  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };

  //cache lại
  // Nó chỉ thay đổi khi todos có thay đổi
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <TodoSimple todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default CallBackExample;

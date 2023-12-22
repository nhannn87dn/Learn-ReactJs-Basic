import React, { useState, useCallback, useMemo } from "react";
import Todos from "../Todos";

const computeLetterCount = (word: string) => {
  let i = 0;
  while (i < 1000000000) i++;
  return word.length;
};

const UseCallBackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    console.log("clicked");
    setCount((c) => c + 1);
  };

  const [wordIndex, setWordIndex] = useState(0);

  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];

  //Gặp hàm này, chạy tốn thời gian
  //Nếu để như vậy thì hàm này luôn được chạy khi component re-render
  // Làm chậm phần UI chính render ra
  //const letterCount = computeLetterCount(word);
  //fix
  // useMemo trả về kết quả và cache nó khi chưa dùng đến
  const letterCount = useMemo(() => {
    return computeLetterCount(word);
  }, [word]);

  // 1 function có sử dụng state
  // Component con Todos đang sử dụng hàm này
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
      <h2>Compute number of letters</h2>

      <p>
        "{word}" has {letterCount} letters
      </p>

      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <br />
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count} <br />
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default UseCallBackExample;

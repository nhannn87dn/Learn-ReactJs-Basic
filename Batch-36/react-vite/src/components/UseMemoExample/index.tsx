import React, { useState, useMemo } from "react";


const computeLetterCount = (word: string) => {
  
  let i = 0;
  while (i < 1000000000) i++; 
  //Kéo dài thời gian để trả về độ dài của từ

  return word.length;
};

const UseMemoExample = () => {

  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  //Hàm này gây ra chậm re-render UI
  //const letterCount = computeLetterCount(word);

  // useMemo trả về kết quả và cache nó khi chưa dùng đến
  const letterCount = useMemo(() => {
      return computeLetterCount(word);
  }, [word]);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Compute number of letters</h2>

      <p>
        "{word}" has {letterCount} letters
      </p>

      <button
        className="btn"
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <br />
      <br />
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseMemoExample
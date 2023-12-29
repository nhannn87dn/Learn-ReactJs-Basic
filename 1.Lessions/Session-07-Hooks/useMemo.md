
# useMemo Hook

- `React.Memo` sinh ra với mục địch tránh việc rerender Component nhiều lần thì `useMemo` tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render. 

- Bản chất useMemo là caching lại giá trị trả về (return) của function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền vào function nếu giá trị đó không thay đổi, thì return value đã caching trong memory. Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần rerender tiếp theo.

Doc: <https://react.dev/reference/react/useMemo>

```js
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";


const computeLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
};

function App() {

  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  
 // Khi tăng biến count --> App re-render lại nó sẽ chạy qua hàm này, trong khi chưa cần dùng đến nó
 // useMemo trả về kết quả và cache nó khi chưa dùng đến
  const letterCount = useMemo(() => {
      return computeLetterCount(word);
  }, [word]);

  //without useMemo
  //const letterCount = computeLetterCount(word);

  return (
    <div style={{ padding: "15px" }}>
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
      <br />
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


```
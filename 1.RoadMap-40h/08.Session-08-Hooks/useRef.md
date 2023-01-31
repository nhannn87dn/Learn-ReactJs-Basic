# useRef Hook

\- The useRef Hook allows you to persist values between renders.

\- It can be used to store a mutable value that does not cause a re-render when updated.

\- It can be used to access a DOM element directly

**Đếm số lần Render**

```js
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
```

**Use useRef to focus the input**

```js
function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

**Tracking State Changes**

Nếu sử dụng useRef thì có thể giữ lại giá trị của input cũ trước khi input thay đổi giá trị mới.

```js
function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  // Sử dụng useEffect
  // Sau khi component render xong, thì quay lại cập nhật giá trị current = giá trị vừa nhập vào
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
```

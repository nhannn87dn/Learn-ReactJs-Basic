# useRef Hook

Trong React, useRef là một hook dùng để tham chiếu đến các phần tử DOM hoặc giá trị của các thành phần trong quá trình render. Nó cung cấp cho chúng ta một cách để truy cập và thao tác các phần tử DOM mà không cần thay đổi lại giao diện người dùng.


Tính năng nổi bật của nó:


\- useRef Hook cho phép bạn duy trì các giá trị giữa các lần renders.

\- Nó có thể lưu trữ một giá trị mà không gây ra re-render khi updated.

\- Nó có thể sử dụng để truy cập đến DOM element trực tiếp


Doc: <https://react.dev/reference/react/useRef>


Cách sử dụng useRef:

1.Import useRef từ thư viện React:

```js
import React, { useRef } from 'react';
```

2. Tạo một biến tham chiếu bằng cách gọi useRef:

```js
const myRef = useRef();
```

3. Gán giá trị tham chiếu cho một phần tử DOM hoặc thành phần React:

```jsx
<div ref={myRef}></div>
```
4. Sử dụng giá trị tham chiếu để truy cập và thao tác phần tử DOM hoặc thành phần:

```jsx
myRef.current // Truy cập vào phần tử DOM
```


## Ví dụ 1: Sử dụng useRef để thay đổi giá trị của một input

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value = 'Hello, React!';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
}


```



## Vd2: Đếm số lần Render

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

## Focus vào một input

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

## Tracking State Changes

Sử dụng useRef để lưu trữ và sử dụng giá trị trước và sau render

```js
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const countRef = useRef(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = countRef.current;
  });

  const handleIncrement = () => {
    countRef.current += 1;
    console.log('Previous count:', prevCountRef.current);
    console.log('Current count:', countRef.current);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

```


Trong ví dụ trên, chúng ta sử dụng hai giá trị tham chiếu countRef và prevCountRef. Khi người dùng nhấp vào nút "Increment", giá trị của countRef sẽ được tăng lên 1 và được in ra màn hình cùng với giá trị trước đó của countRef thông qua prevCountRef.current.

Sử dụng useRef giúp chúng ta lưu trữ và thao tác các giá trị hoặc phần tử DOM một cách dễ dàng trong quá trình render và tái render của React.
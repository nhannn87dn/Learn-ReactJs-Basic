# useRef Hook

useRef là một hook trong React được sử dụng để lưu trữ và truy cập vào giá trị bất biến (immutable value) trong suốt quá trình thay đổi của component. 

useRef thường được sử dụng để lưu trữ và truy cập vào các tham chiếu đến các phần tử DOM hoặc các giá trị khác mà không gây ra việc render lại lại component.


Tính năng nổi bật của nó:


\- useRef Hook cho phép bạn duy trì các giá trị giữa các lần renders.

\- Nó có thể lưu trữ một giá trị mà không gây ra re-render khi updated.

\- Nó có thể sử dụng để truy cập đến DOM element trực tiếp


Doc: <https://react.dev/reference/react/useRef>


## Ví dụ 1: Sử dụng useRef để thay đổi giá trị của một input

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef();

  console.log('render');

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

Trong ví dụ trên, chúng ta sử dụng useRef để lưu trữ tham chiếu đến phần tử input. Khi người dùng nhấp vào nút "Change Value", hàm handleClick sẽ được gọi. 

Trong hàm này, chúng ta sử dụng `inputRef.current.value = 'value'` để thay đổi giá trị của input bằng giá trị mới

Và các bạn thấy component không re-render khi giá trị của input thay đổi.





## Vd2: Đếm số lần Render

```js
import React, { useEffect, useRef, useState } from 'react';

function Counter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```


Trong ví dụ trên, chúng ta sử dụng useRef để khởi tạo biến renderCount và gán giá trị ban đầu là 0. Mỗi khi component re-render, chúng ta tăng giá trị của biến renderCount bằng cách truy cập vào renderCount.current.

Ở phần giao diện của component, chúng ta hiển thị giá trị của biến count và renderCount.current. Khi người dùng nhấp vào nút "Increment", giá trị của biến count sẽ được tăng lên 1.

Khi chạy ví dụ này, bạn sẽ thấy số lần re-render của component được hiển thị trong phần "Render count". Mỗi khi bạn nhấp vào nút "Increment", giá trị của biến count tăng lên và component re-render. Tuy nhiên, giá trị của biến renderCount không thay đổi sau mỗi lần re-render, do đó nó sẽ đếm số lần re-render của component mà không cần re-render lại chính nó.

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


Trong ví dụ trên, chúng ta sử dụng useRef để lưu trữ tham chiếu đến phần tử input. Khi người dùng nhấp vào nút "Focus Input", hàm handleClick sẽ được gọi. 

Trong hàm này, chúng ta sử dụng inputRef.current để truy cập vào phần tử input và gọi phương thức focus() để đưa con trỏ vào ô input.


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

Xem thêm các ví dụ về useRef: <https://www.robinwieruch.de/typescript-react-useref/>
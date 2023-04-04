# useCallback Hook

- `useCallback` dùng cache một function có sử dụng State

- `useCallback` Hook chỉ chạy khi dependency thay đổi ==> Điều này làm cải thiện performance.

- Dùng khi nào: khi component CON cần truyền một sự kiện callback ra cho CHA

- Component CON cần thêm React.memo() nữa mới đạt được hiệu quả


Doc: <https://react.dev/reference/react/useCallback>

```js
//App.js

import { useState, useCallback } from "react";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(c => c + 1);
  };
  
  const addTodo = () => {
    setTodos(t => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

// Todos.js

import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default Todos;
//export default memo(Todos);
```

\- Khi bạn click  `increment` để tăng  biến `count` lên thì bạn xem console.log và thấy component Todos được re-render lại một cách ko cần thiết.

\- Tại sao vậy ? Ở đây có một khái niệm gọi là `**referential equality**` (Bình đẳng tham chiếu)

\- Biến `count` thay đổi --> Component CHA App re-render lại.

\- function `addTodo` khởi tạo một giá trị tham chiếu mới. Do đó bạn được hiểu là hàm `addTodo` đã thay đổi. ==> dẫn đến component CON Todos render

==> Để tránh Todos re-render ta cần sửa lại hàm addTodo

```js
//cache lại
// Nó chỉ thay đổi khi todos có thay đổi
const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

```

useCallback phát huy tác dụng khi nó đi kèm với memo()

```js
export default memo(Todos);
```
# useReducer Hook

- Giúp bạn cập nhật State phức tạp
- State Liên quan đến nhiều components 

Doc: <https://react.dev/reference/react/useReducer>

Cú pháp

```js
useReducer(<reducer>, <initialState>)
```

- **reducer** là một Function chứa logic xử lý cập nhật State

- **initialState** Là giá trị khởi tạo mặc định của State

**useReducer Hook** trả về State hiện tại và một dispatch method.


Ví dụ về một Component TodoApp

```js
import Todos from "./Todos";

export default const TodoApp = ()=>{
  return (
    <>
    <Todos />
    </>
  )
}
```

File Todos.js

```js
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
```

Có thể nâng cấp ví dụ đó lên. Tạo thêm components TodoFilters

- TodoFilters chứa 3 giá trị lọc: All, Complete, UnComplete

- Khi thay đổi chọn các trạng thái này thì bên Todos

```js
import Todos from "./Todos";
import TodoFilters from "./TodoFilters";

export default const TodoApp = ()=>{
  return (
    <div>
    <TodoFilters />
    <Todos />
    </div>
  )
}
```

# useReducer Hook

Trong React, useReducer là một hook cho phép bạn quản lý trạng thái của thành phần sử dụng một hàm reducer. 

Nó cung cấp một cách thay thế cho useState khi bạn cần quản lý các trạng thái phức tạp hoặc logic trạng thái phức tạp hơn.

Các State được lưu trữ ở một nơi gọi là kho (Store) và sử dụng chung cho nhiều components

## ⭐ Đặt vấn đề

Dưới đây là một ví dụ về một App Countdown đơn giản sử dụng useSate.

Sử dụng các phương thức handler để thay đổi giá trị State

```js

const CountApp = () => {

  const [count,setCount] = React.useState(0);

  const handlerDown = () => {
      setCount(prev => prev - 1);
  }
  const handlerUp = () => {
    setCount(prev => prev + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
    </div>
  )
}
```

`useReducer` cung cấp cho bạn thêm một lựa chọn nữa để quản lý State trong function component 

- Những gì `useState` làm được, thì `useReducer` làm được
- Những gì `useReducer` làm được, thì `useState` làm được




## ⭐ Vậy khi nào thì dùng useSate, Khi nào dùng useReducer


### 🔥 useState 

- Thường dùng với những components có State đơn giản
- State có kiểu dữ liệu nguyên thủy: chỉ là số, string, boolean, hoặc object, array đơn giản.
- Số lượng State trong một component ít

### 🔥 useReducer 

- Thường dùng với những components có State phức tạp: array, object có nhiều lớp
- Số lượng State trong một component nhiều

- State sau lại cần kết quả của State trước để thực hiện việc tính toán, xử lý logic

Phân tích cách thực hiện

```js
//useState
// 1. Init state: 0
// 2. Actions: Up (state + 1), Down (state - 1 )


//useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1), Down (state - 1)
// 3. Tạo Reducer (Xử lý logic để thay đổi State)
// 4. Dispatch (Kích hoạt một action)

```

Doc: <https://react.dev/reference/react/useReducer>

Cú pháp

```js
useReducer(<reducer>, <initialState>)
```

- **reducer** là một Function chứa logic xử lý cập nhật State

- **initialState** Là giá trị khởi tạo mặc định của State

**useReducer Hook** trả về State hiện tại và một dispatch method.

Áp dụng ví dụ trên với useReducer

```js
//Init State
// Giá trị khởi tạo lúc đầu là 0
const initialState = 0;

//Actions

const ACTION_UP = 'up';
const ACTION_DOWN = 'down';

/**
 * 
 * @param state state hiện tại
 * @param action hành động thay đổi state
 * reducer sẽ dự vào action để thực hiện hành động tương ứng, sau đó trả về state mới (cùng kiểu dữ liệu với initialState)
 */
const reducer = (state, action) =>{
  // Lúc đầu reducer nó chưa chạy
  // Cho đến khi dispatch được gọi
  console.log('reducer running');
  switch(action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error(`Action invalid`);
  }
}

//dispatch sử dụng bên trong components

const CountApp = () => {

  /**
   * useReducer là một hàm nhận 3 tham số đầu vào, chủ yếu dùng 2.
   * Tham số 1: reducer
   * Tham số 2: initialState
   * 
   * useReducer chạy và tạm thời để reducer ở đó, nó chạy giá trị khởi tạo initialState trước và trả về mảng có 2 phần tử:
   * - state hiện tại (count)
   * - dispatch (dùng nó để kích hoạt action, DOWN hay UP để có hành động thay đổi state tương ứng)
   * 
   * 
   * 
   */
  const [count,dispatch] = React.useReducer(reducer,initialState);

  const handlerDown = () => {
      dispatch(ACTION_DOWN);
  }
  const handlerUp = () => {
    dispatch(ACTION_UP);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
    </div>
  )
}
```

========================


**Ví dụ về một Component có state Phức tạp hơn sử dụng useReducer**

Xem chi tiết: <https://react.dev/learn/extracting-state-logic-into-a-reducer#>

**Sử dụng useReducer kết hợp với useContex**

Tham khảo bài viết sau: <https://react.dev/learn/scaling-up-with-reducer-and-context>

**Một số ví dụ khác**

<https://devtrium.com/posts/how-to-use-react-usereducer-hook>

## ⭐ Kết Luận

Để vận hành được `useReducer` trong một ứng dụng lớp rất phức tạp, khó bảo trì code.

May mắn là Luôn có một giải pháp khác đơn giản những vẫn đạt được hiệu quả tương tự.

Một số thư viện thay thế `useReducer`:

* React Redux
* Redux Toolkit
* Redux Saga
* [Zustand](Manage-State/4.Zustand.md) --> Đơn giản mà hiệu quả

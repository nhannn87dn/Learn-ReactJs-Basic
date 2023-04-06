# useReducer Hook


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


Ví dụ về một Component TodoApp có state Phức tạp hơn

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

//1. InitState
const initialState = {
  job: '',
  jobs: []
};

// 2. Actions
// Một hành động chỉ thực hiện 1 nhiệm vụ
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const COMPLETE_JOB = 'complete_job';
const REMOVE_JOB = 'remove_job';

//Action Functions
// đầu vào là payload
// đầu ra là object chứa action và payload 
const setJobAction = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const removeJobAction = payload => {
  return {
    type: REMOVE_JOB,
    payload
  }
}

//3. reducer
const reducer = (state, action) => {

  console.log('Action',action);
  console.log('Prev state',state);

  //Mục đích để console.log được giá trị state sau khi thay đổi
  let newState;

  switch (action.type) {
    case SET_JOB:
        //ES6, thay đổi giá trị một phần tử Object
        newState =  {
          ...state,
          job: action.payload
        }

        break;
    case ADD_JOB:
        //ES6, thêm một phần tử Array
        newState =  {
          ...state,
          jobs: [...state.jobs, action.payload]
        }

        break;
    case REMOVE_JOB:
         //ES6, xóa một phần tử Array

        //1.sao chép mảng cũ
         const newJobs  = [...state.jobs];
        //2.Xóa phần tử trong mảng mới
        newJobs.splice(action.payload, 1);
        //3 Cập nhật mảng cũ thành mảng mới
        newState =  {
          ...state,
          jobs: newJobs
        }

        break;
      
   

    default:
      throw new Error("Invalid Action");
  }

  console.log(newState);

  return newState;
};

function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Destructoring the state
  const { job, jobs} = state;

  const handleSubmit = (e) => {
    dispatch({ type: ADD_JOB, payload: e.target.value });

    //dispatch({ type: SET_JOB, payload: '' });
    dispatch(setJobAction(''));
  };

  return (
    <>
    <h3>Todo App</h3>
    <div>
     <input 
     value={job} 
     placeholder="Enter todo..."
     onChange={ e=> {
      /*
      Truyền cả action lẫn data để set lại giá trị state tương ứng
      */
      //dispatch({ type: SET_JON, payload: e.target.value})
      dispatch(setJobAction(e.target.value))
     }

     }
     />
     <button onClick={handleSubmit}>Add</button>
    </div>
      {jobs.map((todo) => (
        <div key={todo.id}>
          <label>
            {todo.title} 
             <button onClick={()=>{
              dispatch(removeJobAction(todo.id))
             }}>X</button>
          </label>
        </div>
      ))}
    </>
  );
}
```

**Có thể nâng cấp ví dụ đó lên**

- Thêm tùy chọn Click vào đánh dấu Job đã hoàn thành. còn mặc định khi thêm vào là chưa làm.

- Tạo thêm components TodoFilters

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

import React from 'react';
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

export default CountApp;
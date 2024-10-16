import React from 'react'


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
const reducer = (state: number, action: string) =>{
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

const CountApp = () => {

    // const [count,setCount] = React.useState(0);
    const [count,dispatch] = React.useReducer(reducer,initialState);
    const handlerDown = () => {
        dispatch(ACTION_DOWN);
    }
    const handlerUp = () => {
      dispatch(ACTION_UP);
    }
    // const handlerDown = () => {
    //     setCount(prev => prev - 1);
    // }
    // const handlerUp = () => {
    //   setCount(prev => prev + 1);
    // }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
      </div>
    )
  }

export default CountApp
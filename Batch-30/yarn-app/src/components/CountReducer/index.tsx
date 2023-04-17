import React from 'react';


//b1: inital state: 0
const initialState = 0;
//b2: tạo ra actions
const ACTION_UP = 'up';
const ACTION_DOWN = 'down';
//b3: Tạo reducer

const reducer = (state: number, action: string)=>{
  switch(action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error(`Action invalid`);
  }
}

//b4 Tạo dispatch

const CountReducer = () => {

    const [count,dispatch] = React.useReducer(reducer,initialState);
   
  
    const handlerDown = () => {
        //setCount(prev => prev - 1);
        dispatch(ACTION_DOWN);
    }
    const handlerUp = () => {
      //setCount(prev => prev + 1);
      dispatch(ACTION_UP);
    }
    return (
      <div>
        <h1>Count Reducer</h1>
        <h1>{count}</h1>
        <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
      </div>
    )
  }

export default CountReducer
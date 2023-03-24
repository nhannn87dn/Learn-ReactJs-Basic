import React from "react";

//useState
//1.init State
  //state = 0
//2. Actions 
//setCount( count - 1) / setCount( count - 1)

//useReducer
//1.init State
//.Actions
//4.Reducer
//5.Dispatch

//B1. iniState
const initialState = 0;

//B2. Action
const ACTION_UP = 'up'
const ACTION_DOWN = 'down';

//3.Reducer
//state: state hiện tại 
//action: hành động để thay đổi giá trị state
const reducer = (state, action) =>{
    console.log('reducer run');
    switch (action) {
        case ACTION_UP:
            return state + 1;
        case ACTION_DOWN:
            return state - 1;
        default:
            throw new Error(`Invalid action ${action}`);
    }
}

const CountDownReducer = () => {
    //{key: value,key: {key: {key:value}} }
    //[key: value]
    const [state,dispatch] = React.useReducer(reducer,initialState);
   
  
    return (
      <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(ACTION_DOWN)}>Down</button>
        <button onClick={()=>dispatch(ACTION_UP)}>Up</button>
      </div>
    )
  }

  export default CountDownReducer;
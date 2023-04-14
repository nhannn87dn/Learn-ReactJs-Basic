import ProductPage from "./pages/ProductPage";
import React from 'react';
import "./styles/global.css";
import { userContext, UserType, users } from "./context/userContex";
import LoginPage from "./pages/LoginPage";
/* useState */
//b1 : initial state = giá trị khởi tạo
//b2 : actions = các hành động để thay đổi state
//handlerDown, handlerUp là hành động

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

//b4

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
      <h1>{count}</h1>
      <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
    </div>
  )
}


function App() {
 
  
  console.log("App rendered");

  return (
    <div>
      <userContext.Provider value={users}>
       {/* <CountApp /> */}
          <LoginPage />
       </userContext.Provider>
    </div>
  );
}

export default App;

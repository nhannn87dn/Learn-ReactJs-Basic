import React from "react";

//b1: inital state: 0
export const initialState = 0;
//b2: tạo ra actions
const ACTION_UP = 'up';
const ACTION_DOWN = 'down';

export const actions = {up: ACTION_UP, down: ACTION_DOWN};

//b3: Tạo reducer

export const reducer = (state: number, action: string)=>{
  switch(action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error(`Action invalid`);
  }
}


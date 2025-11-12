// Component sử dụng useReducer
import React, { useReducer } from "react";

// Hàm Reducer: Định nghĩa cách state thay đổi dựa trên action
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "set_step":
      return { ...state, step: action.payload }; // payload là dữ liệu đi kèm action
    case "reset":
      return { count: 0, step: 1 }; // Reset cả count và step
    default:
      throw new Error(); // Luôn ném lỗi nếu action type không hợp lệ
  }
}

function CounterWithReducer() {
  // Khởi tạo useReducer
  // const [state, dispatch] = useReducer(reducerFunction, initialStateObject);
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      {/* Gửi (dispatch) các action đến reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "set_step", payload: state.step + 1 })}
      >
        Increase Step
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterWithReducer;

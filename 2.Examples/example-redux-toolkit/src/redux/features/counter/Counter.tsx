import { useSelector, useDispatch } from "react-redux";
//Lấy các action từ Slice vào
import { decrement, increment } from "./counterSlice";
import { RootState } from '../../store';

export function Counter() {
  //Sử dụng các hooke của react-redux để truy vập vào Store chung
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
       <h2>Couter Slice</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
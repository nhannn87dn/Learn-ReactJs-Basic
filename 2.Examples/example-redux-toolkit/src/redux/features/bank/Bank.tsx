import { useSelector, useDispatch } from "react-redux";
//Lấy các action từ Slice vào
import { deposit, withdraw } from "./bankSlice";
import { RootState } from "../../store";

export function Bank() {
  //Sử dụng các hooke của react-redux để truy vập vào Store chung
  const balance = useSelector((state: RootState) => state.bank.balance);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Bank Slice</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(deposit(10))}
        >
          Increment + 10$
        </button>
        <span>Balance: {balance}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(withdraw(5))}
        >
          Decrement 5$
        </button>
      </div>
    </div>
  );
}
import { useSelector, useDispatch } from "react-redux";
import { depositMoney, withdrawMoney } from "./bankActions";

const BankAccount = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const deposit = (amount: number) => {
    dispatch(depositMoney(amount));
  };

  const withdraw = (amount: number) => {
    dispatch(withdrawMoney(amount));
  };

  return (
    <div>
      <h2>Balance: {balance}</h2>
      <div>
        <button
          onClick={() => {
            console.log("withdrawMoney");
            withdraw(5);
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            deposit(10);
          }}
        >
          +10
        </button>
      </div>
    </div>
  );
};

export default BankAccount;

import useBankStore from "../../hooks/useBankStore";

const BankingZustand = () => {
  //Truy cập vào store
  const { balance, depositMoney, withdrawMoney } = useBankStore();

  return (
    <div>
      <h2>Banking Zustand</h2>
      <p>balance: {balance}</p>
      <div>
        <button
          className="btn"
          onClick={() => {
            depositMoney(10);
          }}
        >
          Nạp 10$
        </button>
        <button
          className="btn"
          onClick={() => {
            withdrawMoney(5);
          }}
        >
          Rút 5$
        </button>
      </div>
    </div>
  );
};

export default BankingZustand;

import useBankStore from "../../hooks/useBankStore";

const BankingHangXom = () => {
  const { depositMoney, withdrawMoney } = useBankStore();
  return (
    <div>
      <h2>Banking Hang XOm</h2>
      <div>
        <button
          className="btn"
          onClick={() => {
            depositMoney(5);
          }}
        >
          Nạp 5$
        </button>
        <button
          className="btn"
          onClick={() => {
            withdrawMoney(2);
          }}
        >
          Rút 2$
        </button>
      </div>
    </div>
  );
};

export default BankingHangXom;

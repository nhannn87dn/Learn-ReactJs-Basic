import { useBankStore } from "../../hooks/useBankStore";

const CountHangXom = () => {
  const { depositMoney, withdrawMoney } = useBankStore();
  return (
    <div>
      CountHangXom
      <button
        onClick={() => {
          depositMoney(1);
        }}
        className="btn"
      >
        + 1$
      </button>
    </div>
  );
};

export default CountHangXom;

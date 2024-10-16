import { useBankStore } from "../../hooks/useBankStore";

const SimpleCount = () => {
  console.log("SimpleCount Render");

  const { balance, depositMoney, withdrawMoney } = useBankStore();

  return (
    <>
      <h1>Simple Count</h1>
      <h2>{balance}</h2>
      <button
        onClick={() => {
          depositMoney(10);
        }}
        className="btn"
      >
        + 10$
      </button>
      <br />
      <button
        onClick={() => {
          withdrawMoney(5);
        }}
        className="btn"
      >
        - 5$
      </button>
    </>
  );
};

export default SimpleCount;

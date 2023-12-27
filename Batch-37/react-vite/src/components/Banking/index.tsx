import React from "react";

const Banking = () => {
  const [balance, setBalance] = React.useState(0);

  return (
    <div>
      <h2>Banking useState</h2>
      <p>balance: {balance}</p>
      <div>
        <button
          className="btn"
          onClick={() => {
            setBalance((prev) => prev + 10);
          }}
        >
          Nạp 10$
        </button>
        <button
          className="btn"
          onClick={() => {
            setBalance((prev) => prev - 5);
          }}
        >
          Rút 5$
        </button>
      </div>
    </div>
  );
};

export default Banking;

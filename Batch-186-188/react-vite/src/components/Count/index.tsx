import React from "react";

const Count = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1 className="text-3xl">{count}</h1>
      <button
        className="btn btn-default"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Count;

import { useCount } from "../stores/useCount";

const Count = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Count;

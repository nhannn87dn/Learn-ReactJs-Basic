import { useCount } from "../stores/useCount";

const Count = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Count;

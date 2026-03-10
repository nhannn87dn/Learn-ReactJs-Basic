import { useCount } from "../stores/useCount";

const CountV2 = () => {
  const { increment, decrement } = useCount();
  return (
    <div>
      CountV2
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CountV2;

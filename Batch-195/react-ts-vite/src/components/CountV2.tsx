import { useCount } from "../stores/useCount";

const CountV2 = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <h2>Count V2 Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => increment()}>Increase</button>
    </div>
  );
};

export default CountV2;

import { useCountStore } from "../stores/useCountStore";

const CountB = () => {
  const { setCount } = useCountStore();
  return (
    <div>
      <h2>COUNT B</h2>
      <button onClick={setCount}>+1</button>
    </div>
  );
};

export default CountB;

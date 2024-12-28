import { useCount } from "../../stores/useCount";
export default function Count() {
  const { count, tang, giam } = useCount();
  return (
    <div>
      <h2>Count</h2>
      <h1>{count}</h1>
      <button onClick={tang}>+</button>
      <button onClick={giam}>-</button>
    </div>
  );
}

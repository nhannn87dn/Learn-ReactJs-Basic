import { useCountLocalStorage } from "../stores/useCountLocalStorage";

export default function CustomerOrderPage() {
  const { count, tang, giam } = useCountLocalStorage();
  return (
    <>
      <h1>CustomerOrderPage</h1>
      <h2>Count</h2>
      <h1>{count}</h1>
      <button onClick={tang}>+</button>
      <button onClick={giam}>-</button>
    </>
  );
}

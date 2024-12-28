import { useCount } from "../../stores/useCount";
export default function CountV2() {
  const { giam, tang } = useCount();
  return (
    <div>
      <h1>CountV2</h1>
      <button onClick={tang}>+</button>
      <button onClick={giam}>-</button>
    </div>
  );
}

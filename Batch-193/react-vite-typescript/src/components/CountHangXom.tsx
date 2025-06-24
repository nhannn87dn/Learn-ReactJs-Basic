import { useCountStore } from "../stores/counterStore";
const CountHangXom = () => {
  const { setCount } = useCountStore();
  return (
    <div className="border border-blue-300 my-4 p-5">
      <h1>CountHangXom</h1>
      <button onClick={setCount}>+1</button>
    </div>
  );
};

export default CountHangXom;

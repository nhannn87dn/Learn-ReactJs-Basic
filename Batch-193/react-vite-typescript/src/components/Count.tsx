import { useCountStore } from "../stores/counterStore";
const Count = () => {
  const { count, setCount } = useCountStore();
  return (
    <div className="border border-red-300 my-4 p-5">
      <h1>Count</h1>
      <h1>{count}</h1>
      <button onClick={setCount}>+1</button>
    </div>
  );
};

export default Count;

import { useCountStore } from "../stores/counterStore";

const CountHangXom = () => {
  /*
    Chỉ cần lấy setCount thôi
    thì bạn code selector trả về mỗi setCount
    Để tối ưu hiệu suất
    */
  const setCount = useCountStore((state) => state.setCount);
  const count = useCountStore((state) => state.count);
  return (
    <div className="border border-blue-300 my-4 p-5">
      <h1>CountHangXom</h1>
      <h2>{count}</h2>
      <button onClick={setCount}>+1</button>
    </div>
  );
};

export default CountHangXom;

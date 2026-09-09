import { useCount } from "../stores/count-store";

const CountHangXom = () => {
  const { setCount } = useCount();
  return (
    <div>
      CountHangXom
      <button className="btn" onClick={() => setCount()}>
        Increase
      </button>
    </div>
  );
};

export default CountHangXom;

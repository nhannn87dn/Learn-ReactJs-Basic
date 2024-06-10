import { useCount } from "../../stores/useCount";

const CountHangXom = () => {
  const { setCount } = useCount();

  return (
    <div>
      <button
        onClick={() => {
          console.log("mua ngay");
          setCount();
        }}
      >
        Mua ngay
      </button>
    </div>
  );
};

export default CountHangXom;

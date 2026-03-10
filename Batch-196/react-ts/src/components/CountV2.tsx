import { useCount } from "../stores/useCount";

const CountV2 = () => {
  const { increment, decrement, user } = useCount();
  return (
    <div>
      CountV2
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <hr />
      {user?.access_token}
    </div>
  );
};

export default CountV2;

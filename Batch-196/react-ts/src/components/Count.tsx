import { useCount } from "../stores/useCount";

const Count = () => {
  const { count, increment, decrement, doGet, login } = useCount();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <hr />
      <button onClick={doGet}>getCount</button>
      <button
        onClick={() => {
          login("john@mail.com", "changeme");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Count;

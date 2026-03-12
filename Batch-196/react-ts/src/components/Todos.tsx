import { memo } from "react";

const Todos = ({
  todos,
  addTodo,
}: {
  todos: string[];
  addTodo: () => void;
}) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);

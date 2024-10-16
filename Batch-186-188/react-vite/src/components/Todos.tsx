import { memo } from "react";
type TTodos = {
  todos: string[];
  addTodo: () => void;
};
const Todos = ({ todos, addTodo }: TTodos) => {
  console.log("todos render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="btn btn-primary" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default memo(Todos);

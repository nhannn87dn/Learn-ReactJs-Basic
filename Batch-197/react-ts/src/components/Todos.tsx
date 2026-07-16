import { memo } from "react";

type TodosProps = {
  todos: string[];
  addTodo: () => void;
};

const Todos = ({ todos, addTodo }: TodosProps) => {
  console.log("Todos render");
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
//render lây
export default memo(Todos);

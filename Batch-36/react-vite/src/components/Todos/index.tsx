import { memo } from "react";

type TodoType = {
  todos: object;
  addTodo: ()=> void
}
const Todos = ({ todos, addTodo }: TodoType) => {
  console.log("Todos render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
    </>
  );
};
//export default Todos;
export default memo(Todos);
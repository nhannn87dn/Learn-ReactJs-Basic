import TodoListItem from "../TodoListItem";

const TodoList = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

export default TodoList;

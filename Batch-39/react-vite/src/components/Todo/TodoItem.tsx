type TTodo = {
  text: string;
};

const TodoItem = ({ text }: TTodo) => {
  return <li>{text}</li>;
};
export default TodoItem;

import { todos } from "../../data/todos";

const SingleItem = ({
  content,
  done = false,
}: {
  content: string;
  done?: boolean;
}) => {
  //return <li>{done === true ? <del>{content}</del> : content}</li>;
  return (
    <li>
      {content} {done === true ? "✔" : null}
    </li>
  );
};

const TodoList = () => {
  console.log("<<=== 🚀 todos ===>>", todos);
  return (
    <ul>
      {/* <SingleItem content="Quet nha" done={true} />
      <SingleItem content="Hut bui" done={true} />
      <SingleItem content="Giat do" /> */}
      {todos.map((todo, index) => {
        //TodoList_${index}
        //TodoList_1
        //TodoList_2
        //TodoList_3
        return (
          <SingleItem
            key={`TodoList_${index}`}
            content={todo.name}
            done={todo.done ? todo.done : false}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

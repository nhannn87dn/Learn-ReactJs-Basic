import React from "react";

type SingleItemType = {
  content: string;
  index: number;
  handleRemove: (c: number) => void;
};

const SingleItem = ({ content, index, handleRemove }: SingleItemType) => {
  let [isDone, setIsDone] = React.useState(false);
  return (
    <li>
      <input
        onChange={() => {
          console.log("Da check");
          setIsDone(!isDone);
        }}
        type="checkbox"
        checked={isDone}
      />
      {isDone ? <del>{content}</del> : content}

      <button onClick={()=>{
        console.log('Ban da xoa item thứ '+index);
        handleRemove(index);
      }}>Remove</button>
    </li>
  );
};

const TodoList = () => {
  // ['hoc bai', 'quet nha']
  let [todos, setTodos] = React.useState<string[]>([]);
  let [note, setNote] = React.useState("");
  const handleAdd = () => {
    console.log("add");
    setTodos([...todos, note]);
    setNote("");
  };

  const handleRemove = (index: number) => {
    console.log("remove "+ index);
     
   
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          value={note}
          onChange={(e) => {
            console.log(e.target.value);
            setNote(e.target.value);
          }}
          type="text"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return <SingleItem key={index} handleRemove={handleRemove} index={index} content={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;

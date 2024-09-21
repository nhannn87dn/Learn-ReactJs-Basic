import React, { useState } from "react";

const todos = [
  { id: 1, name: "Giat do", isDone: true },
  { id: 2, name: "Quet nha", isDone: false },
  { id: 3, name: "Nau com", isDone: false },
];

const TodoList = () => {
  const [dataTodos, setDataTodos] = useState(todos);

  const onHandleDone = (id: number) => {
    console.log(id);
    setDataTodos((prevState) => {
      return prevState.filter((p) => {
        if (p.id === id) {
          p.isDone = true;
          return p;
        }
        return prevState;
      });
    });
  };

  const handleDelete = (id: number) => {
    setDataTodos((prevState) => {
      return prevState.filter((p) => p.id !== id);
    });
  };

  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {dataTodos.length > 0 &&
          dataTodos.map((todo) => {
            return (
              <li className={todo.isDone ? "line-through" : ""}>
                {todo.name}{" "}
                <button
                  onClick={() => {
                    onHandleDone(todo.id);
                  }}
                  className="btn btn-default"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;

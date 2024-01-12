import React, { useState } from "react";

type TTodo = {
  id: number;
  name: string;
};

const todoLists = [
  { id: 1, name: "Quet nha" },
  { id: 2, name: "Lau nha" },
];

const SimpleCount = () => {
  //   let count = 0;

  //   const increment = () => {
  //     count = count + 1;
  //     console.log("clicked");
  //   };

  console.log("SimpleCount Render");

  const [count, setCount] = React.useState<number>(0);

  const [isShow, setIsShow] = React.useState<boolean>(false);

  console.log("<<=== 🚀 isShow ===>>", isShow);

  const [todos, setTodos] = useState<TTodo[]>(todoLists);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          const newArr = [...todoLists, { id: 3, name: "Nau com" }];
          setTodos(newArr);
        }}
        className="btn btn-primary"
      >
        Add Todo
      </button>
      <hr />

      <h2>{count}</h2>
      <button
        onClick={() => {
          //   setCount(count + 1); //dòng 1
          //   setCount(count + 1);
          //   setCount(count + 1);
          //prev là snapshot ==> prev = 0
          setCount((n) => n + 1); //dòng 1 ==> 0+ 1 = 1
          setCount((n) => n + 1); // ==>  1+ 1 = 2
          setCount((n) => n + 1); // 2 + 1 = 3
        }}
        className="btn"
      >
        + 3
      </button>
      <br />
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
        className="btn"
      >
        Toogle Content
      </button>
      {isShow && (
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          quos! Ut culpa et atque at minus perspiciatis voluptas necessitatibus!
          Nihil cupiditate aliquam rem asperiores, fugiat necessitatibus
          quisquam quibusdam deleniti incidunt.
        </div>
      )}
    </>
  );
};

export default SimpleCount;

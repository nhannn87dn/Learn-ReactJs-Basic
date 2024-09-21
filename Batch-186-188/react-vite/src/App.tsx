import "./App.css";
import React from "react";
import Button from "./components/Button";
import ListItem from "./components/List/ListItem";
function App() {
  console.log("App render");

  const isShow = true;

  // if(isShow === true){
  //   const display = 'show';
  // }else{
  //   console.log('Hide');
  //   const display = 'hide';
  // }
  // const display = isShow === true ? 'show' : 'hide'

  const renderButton =
    isShow === true ? <Button label="Login" bgColor="bg-indigo-500" /> : null;

  const isDone = true;

  let todos = [
    { id: 1, content: "Giat do" },
    { id: 2, content: "Quet nha" },
    { id: 3, content: "Nau com" },
    { id: 4, content: "Nau com 5" },
  ];

  todos = [];

  // function log(a){
  //   a = a + 1;
  //  return a;
  // }
  // const Logger = ()=>console.log('hello')

  return (
    <>
      <h1>Conditional Rendering</h1>
      {renderButton}

      <ul>
        {todos.length > 0 &&
          todos.map((todo) => {
            //can thiep
            todo.id = todo.id + 1;

            return <ListItem key={todo.id} content={todo.content} />;
          })}
        {/* <ListItem content="Giat do"  />
        <ListItem content="Quet Nha"  />
        <ListItem content="Nau com"  /> */}
      </ul>

      {/* {isShow === true ? (
        <Button label="Login" bgColor="bg-indigo-500" />
      ) : null} */}

      {/* {isShow && <Button label="Login" bgColor="bg-indigo-500" />} */}
    </>
  );
}

export default App;

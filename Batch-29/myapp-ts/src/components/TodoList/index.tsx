import React from 'react'

type SingleItemType = {
    content: string;
}

const SingleItem = ({content} : SingleItemType) => {
    return(
        <li>{content}</li>
    )
}

const TodoList = () => {
    // ['hoc bai', 'quet nha']
   let [todos, setTodos] = React.useState<string[]>([]);
   let [note, setNote] = React.useState('');
    const handleAdd = ()=>{
        console.log('add');
        setTodos([...todos, note]);
        setNote('');
    }
  return (
    <div>
        <h1>Todo List</h1>
        <div>
            <input value={note} onChange={(e)=> {
                console.log(e.target.value);
                setNote(e.target.value);
            }} type="text"  />
            <button onClick={handleAdd}>Add</button>
        </div>
        <ul>
            {todos.map((todo,index)=> {
                return  <SingleItem key={index} content={todo} />
            })}
        </ul>
    </div>
  )
}

export default TodoList
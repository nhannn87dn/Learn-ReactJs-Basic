import React, {useState, useCallback} from 'react'
import Todos from '../Todos';

const UseCallBackExample = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  //['quet nha', 'lau nha']

  const increment = () => {
    setCount(c => c + 1);
  };
  
  //Chưa cache
  // const addTodo = () => {
  //   setTodos(t => [...t, "New Todo"]);
  // };

  //cache lại
// Nó chỉ thay đổi khi todos có thay đổi
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
       <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button className='btn' onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default UseCallBackExample
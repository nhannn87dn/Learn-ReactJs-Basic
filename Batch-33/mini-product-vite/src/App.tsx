import {useState,  useCallback, useMemo, useRef } from 'react'
import './App.css'
import ProductPage from './pages/ProductPage'

import {NameContext} from './context/NameContext'

import Greeting from './components/Greeting'
import Todos from './components/Todos'

const computeLetterCount = (word: string) => {
  let i = 0;
  while (i < 1000000000) i++;
  return word.length;
};


function App() {
  const [toogle, setToggle] =  useState(false);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const [wordIndex, setWordIndex] = useState(0);
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];

  const name = 'Softech Aptech';

  /* GIá trị khởi tạo của ==> null */
  

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'Hello, React!';
    }
  };

 

  // const letterCount = computeLetterCount(word);
 
   // Khi tăng biến count --> App re-render lại nó sẽ chạy qua hàm này, trong khi chưa cần dùng đến nó
 // useMemo trả về kết quả và cache nó khi chưa dùng đến
 const letterCount = useMemo(() => {
  return computeLetterCount(word);
}, [word]);


  console.log('App render');
  const increment = () => {
    setCount(c => c + 1);
  };
  
  // const addTodo = () => {
  //   setTodos(t => [...t, "New Todo"]);
  // };

  //cache lại
  // Nó chỉ thay đổi khi todos có thay đổi
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
    {/* <input type="text" ref={inputRef} />
    <button onClick={handleClick}>Change Value</button>

     <Todos todos={todos} addTodo={addTodo} />
      <hr />

      <h2>Compute number of letters</h2>

      <p>
        "{word}" has {letterCount} letters
      </p>

      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <br />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>

    <button onClick={()=>{
      setToggle(!toogle)
    }}>Toggle</button>

    {toogle && <Greeting name="Aptech" /> } */}
      
      <NameContext.Provider value={name}>
        <ProductPage />
     </NameContext.Provider>
      
    </>
  )
}

export default App

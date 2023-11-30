//import {useState} from 'react'
import { useCount } from "../../hooks/useCount"

const Count = ()=>{
  //const [count, setCount] = useState(0);
  const {count,increase, decrease} = useCount();

  return (
    <div>
       <button className='btn' onClick={()=>{
        decrease();
       }}>- 1</button>
      <h2>{count}</h2>
     
      <button className='btn' onClick={()=>{
        increase();
       }}>+ 1</button>
    </div>
  )
}

export default Count
import { useCount } from "../../hooks/useCount"


const CountB = ()=>{
  const {increase, decrease} = useCount();
  return (
    <div>
       Count B
       <button className='btn' onClick={()=>{
        decrease();
       }}>- 1</button>

<button className='btn' onClick={()=>{
        increase();
       }}>+ 1</button>
    </div>
  )
}

export default CountB
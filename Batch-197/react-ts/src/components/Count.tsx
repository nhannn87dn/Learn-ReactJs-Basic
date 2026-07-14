//import { useState } from "react";
import { useCountStore } from "@/stores/useCount";
import { Button } from "./ui/button";


const Count = () => {
    //const [count, setCount] = useState(0);
  //Su dung count tu Store
  const {count, increment} = useCountStore();
  
  return <div>
    <p>{count}</p>
    <Button onClick={increment}>Increment</Button>
  </div>;
};

export default Count;   
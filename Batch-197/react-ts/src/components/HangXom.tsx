import { useCountStore } from "@/stores/useCount"
import { Button } from "./ui/button";

const HangXom = () => {
    const {increment} = useCountStore();
  return (
    <div>HangXom
        <Button onClick={increment}>Increment</Button>
    </div>
  )
}

export default HangXom
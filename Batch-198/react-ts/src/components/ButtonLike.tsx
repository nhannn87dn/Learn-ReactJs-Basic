import {  ThumbsUp } from "lucide-react"
import { useState } from "react"

const ButtonLike = () => {
    const [isLike, setIsLike] = useState(false)
    console.log('<<=== 🚀 isLike ===>>',isLike);
    const style = {
        color: isLike ? 'blue' : 'black'
    }
  return (
    <button onClick={()=>{
        setIsLike(!isLike)
    }} style={style}><ThumbsUp /></button>
  )
}

export default ButtonLike
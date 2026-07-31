import { Bell } from "lucide-react"
import { useState } from "react"

const Notifications = () => {
    const [isShow, setIsShow] = useState(false)
    console.log('<<=== 🚀 isShow ===>>',isShow);
  return (
    <div>
        <button onClick={()=>{
            setIsShow(!isShow)
        }}><Bell /></button>
        {
            isShow && (
                <ul>
                    <li>message 1</li>
                    <li>message 2</li>
                    <li>message 3</li>
                </ul>
            )
        }
    </div>
  )
}

export default Notifications
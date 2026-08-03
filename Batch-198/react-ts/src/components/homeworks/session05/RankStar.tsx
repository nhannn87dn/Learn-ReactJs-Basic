import { Star } from "lucide-react";
import { useState } from "react";

const StartItem = ({onClick,currentStart, value}:  {currentStart: number; value: number; onClick: ()=>void})=>{
    return <span onClick={onClick}>
        <Star color={currentStart > 0 && currentStart >= value ?' yellow': 'black'} size={32} />
    </span>
}

const RankStar = () => {
    const [currentStart, setCurrentStart] = useState(0) 
  const arrs = [1, 2, 3, 4, 5];
     console.log('currentStart', currentStart);
  return (
    <div>
      {arrs.map((item) => {

        return <StartItem onClick={()=>{
           
            setCurrentStart(item)
             console.log('item', item);
        }} key={item} currentStart={currentStart} value={item} />
    })}
    </div>
  );
}

export default RankStar
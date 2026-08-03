import { useState } from "react"

const SimpleGallery = () => {
    const photos = [
        {id: 1, thumb: 'images/thumb-1.jpg'},
        {id:2, thumb: 'images/thumb-2.jpg'},
        {id: 3, thumb: 'images/thumb-3.jpg'}
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('<<=== 🚀 currentIndex ===>>',currentIndex);
  return (
    <div>
        <button onClick={()=>{
            setCurrentIndex((prev)=>{
                if(prev == 0){
                    return 0
                }
                return prev - 1
            })
        }}>Prev</button>
         <img src={photos[currentIndex].thumb} alt="" />
        <button onClick={()=>{
            setCurrentIndex((prev)=> {
                if(prev + 1 === photos.length){
                    return 0
                }
                return prev + 1
            })
        }}>Next</button>
    </div>
  )
}

export default SimpleGallery
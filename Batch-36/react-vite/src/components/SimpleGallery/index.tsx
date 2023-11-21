import { useState } from "react"
const photos = [
  {id: 1, src: 'https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(5).jpg'},
  {id: 2, src: 'https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(3).jpg'},
  {id: 3, src: 'https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(6).jpg'}

]

const SimpleGallery = ()=>{
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxPhoto = photos.length;

  return <div className="gallery w-[710px] m-5">
        <img className="w-full" src={photos[currentIndex].src} alt="" />
        <button onClick={()=>{
          setCurrentIndex(prev => {
            if(currentIndex === 0){
              return currentIndex
            }
            return prev - 1
          })
        }} className="btn">Prev</button>
        <button onClick={()=>{
          setCurrentIndex(prev => {
            if(currentIndex >= maxPhoto - 1){
              return currentIndex
            }
            return prev + 1
          })
          //setCurrentIndex(currentIndex + 1)
        }} className="btn">Next</button>
  </div>
}

export default SimpleGallery
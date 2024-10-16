import React from 'react';
import {photos} from '../../data/photos'

const CarouselReact = () => {
console.log('photos', photos);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

 

  const maxCount = photos.length; //đếm số lượng phần tử của photos => 3

  console.log('currentIndex', currentIndex, maxCount);   

  const handlePrev = ()=>{
    setCurrentIndex(n => {
        if(currentIndex === 0){
            return 0
        }else{
            return n - 1;
        }
    })
  }

  const handleNext = ()=>{
    setCurrentIndex(n=> {
        if(currentIndex === (maxCount - 1)){
            return maxCount - 1;
        }else{
            return n + 1;
        }
    })
  }

  return (
    <div>
        <button onClick={handlePrev} className='btn btn-sky'>Prev</button>
        <button onClick={handleNext} className='btn btn-sky'>Next</button>
        <img src={photos[currentIndex].link} alt="" />
        
    </div>
  )
}

export default CarouselReact
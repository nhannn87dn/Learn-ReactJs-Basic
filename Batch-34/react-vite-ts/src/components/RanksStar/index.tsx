import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const RanksStar = () => {
    const [currentSelected,setCurrentSelected] = React.useState(0)
    const stars = [1,2,3,4,5];
    console.log('currentSelected', currentSelected);

    const handleClickStar = (star:number)=>{
        setCurrentSelected(prevState => {
            if(prevState === star){
                return 0
            }else{
                return star
            }
        })
    }

  return (
    <div style={{display: 'flex'}}>
        {
            stars.map((star)=>{
                // console.log(star, index);
                return (
                    <>
                    {star > currentSelected ? (
                        <AiOutlineStar onClick={()=>handleClickStar(star)} />
                    )
                    : (
                        <AiFillStar onClick={()=>handleClickStar(star)} />
                    )
                    }
                    
                    </>
                )
            })
        }
        
        </div>
  )
}

export default RanksStar
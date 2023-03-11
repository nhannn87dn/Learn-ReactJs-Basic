import React from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ButtonLike = () => {
  let [like, setLike] = React.useState(false);
  const handleonClick = () => {
    setLike((prev) => !prev);
  };

  let [current, setCurrent] = React.useState(0);
  const stars = [1, 2, 3, 4, 5];

  
  return (
    <div>
      <div>
        {stars.map((star, index) => {
          return (
            <span
              onClick={() => {
                if(current === star){
                    setCurrent(0)
                }else{
                    setCurrent(star)
                }
                
              }}
              key={index}
            >
            {index + 1 > current ? <AiOutlineStar /> : <AiFillStar />}
            </span>
          );
        })}
      </div>
      <button onClick={handleonClick}>
        {like ? <AiFillDislike /> : <AiFillLike />} {like ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default ButtonLike;

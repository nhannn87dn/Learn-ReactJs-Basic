import React from 'react'

const ButtonLike = () => {

    const [like, setLike] = React.useState(false);

    console.log(like);

  return (
    <div>
        <button className={like ? 'text-sky-500': ''} onClick={()=>{
            setLike(!like);
        }}>Thích</button>
    </div>
  )
}

export default ButtonLike
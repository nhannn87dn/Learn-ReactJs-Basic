import React, {useState} from 'react'

const ModalState = () => {
    const [isShow, setIsShow] = useState(false)
  return (
    <div>
        <button onClick={()=>{
            setIsShow(!isShow)
        }}>Open Modal</button>
        {/* <div className={isShow === false ? 'hidden' : ''}>
            content modal
        </div> */}
        {
           isShow && (
            <div className='modal'>
                content modal
            </div>
           ) 
        }
        
    </div>
  )
}

export default ModalState
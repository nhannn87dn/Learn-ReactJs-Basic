import './App.css';
import ProductPage from './pages/ProductPage';
import React, {useState} from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Attributes from './components/Attributes';

const Button = ({label, onClick}: {label: string, onClick: ()=> void})=>{

  return (
    <button onClick={onClick} className='bg-indigo-500 rounded text-white py-2 px-3'>{label}</button>
  )
}

const LikeButton = ({isLike,onClick} : {isLike: boolean,onClick: ()=> void})=>{
  return (
    <button onClick={onClick} 
    className={`flex items-center rounded border py-1 px-3 ${isLike ? 'text-blue-900': ''}`}
    ><AiOutlineLike /> Thích</button>
  )
}

const ToogleNavigation = ({isToggleNav, onClick}: {isToggleNav: boolean, onClick: (n: boolean)=> void})=>{
  return (
    <>
      <button onClick={()=>{
        //onClick ==> setIsToggleNav
        onClick(!isToggleNav);

      }}><FaBars /></button>
      {isToggleNav && (
        <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </nav>
      )}
      
    </>
  )
}


function App() {

  const handleButtonClick = (name: string)=>{
    console.log('Clicked',name);
  }

  const handleMouseButton = ()=>{
    console.log('Ban da re chuot len button OK');
  }

  const handlePlayClick = ()=>{
    console.log('Play Button');
  }

   const handlePauseClick = ()=>{
    console.log('Pause Button');
  }

  console.log('App re-render');

  //Cach dinhj nghia 1 State trang thai
  const [index, setIndex] = React.useState<number>(0);

  const handleClick = ()=>{
    setIndex(prev => prev + 1); //Thay doi gia tri index len 1 don vi
    setIndex(prev => prev + 1);
    setIndex(prev => prev + 1);

    //setIndex(index + 1);


  }

  const [isLike, setIslike] =  React.useState<boolean>(false);

  const handleLikeButton = ()=>{
    setIslike(!isLike)
    //setIslike(n=> !n)
  }


  const handleLike = ()=>{
    setIslike(!isLike)
    //setIslike(n=> !n)
  }

  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = ()=>{
    setShowModal(!showModal);
    console.log('handleShowModal');
  }

  const [isToggleNav, setIsToggleNav] = useState<boolean>(false);

  const [quality, setQuality] = useState(0);

  
  return (
    <>
    <div className='flex gap-x-3'>
        <button onClick={()=>{
          setQuality(prev => {
            if(quality === 0){
              return prev
            }
            else{
              return prev - 1
            }
          })
        }} className='px-2 py-1 border rounded'>-</button>
        <strong>{quality}</strong>
        <button onClick={()=>{
          setQuality(prev => prev + 1)
        }} className='px-2 py-1 border rounded'>+</button>
    </div>
<br />
    <ToogleNavigation isToggleNav={isToggleNav} onClick={setIsToggleNav} />
    <br />
    <LikeButton isLike={isLike} onClick={handleLikeButton} />
    <br />
    <button onClick={handleClick}>
        + 3
      </button>
      <h3>  
        {index}
      </h3>
      <br />
      <button onClick={handleShowModal}>
        Show Modal
      </button>
      {
        showModal && (<div className={`border rounded`}>
        Modal
      </div>)
      }
      

      {/* <ProductPage /> */}
      <button className='bg-indigo-500 rounded text-white py-2 px-3' 
      onClick={()=>handleButtonClick('Nhan')}
      onMouseOver={handleMouseButton}
      >
        OK
      </button>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      //Ngăn chặn form fresh lại trang
      e.preventDefault();
      //test alert
      alert('Submitting!');
    }}>
      <input className='border rounded py-2 px-3' name="username" />
      <button className='bg-indigo-500 rounded text-white py-2 px-3'
      type="submit"
      >Send</button>
    </form>

    <div className='my-5'>
      <Button onClick={handleLike}  label={isLike ? 'Da Thich' : 'Like'} />
    </div>

    <Button onClick={handlePlayClick}  label='Play' />
    <Button onClick={handlePauseClick} label='Pause' />
    <Button onClick={()=>{
      console.log('Next');
    }} label='Next' />

    <hr />
    <Attributes />

    </>
  )
}

export default App

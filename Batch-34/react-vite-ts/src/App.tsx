import React from 'react';

import './App.css'
import ButtonLike from './components/ButtonLike';
import ModalState from './components/ModalState';
import CarouselReact from './components/CarouselReact';
import TestForm from './components/TestForm';
// import {EventsHandle} from './components/EventsHandle'


function Count() {
  // let index = 0;
  const [index, setIndex] = React.useState(0);

  console.log('Count render');

  function handleClick() {
    console.log('handleClick');
    // index = index + 1;
    setIndex(index + 1)
  }
return (
    <>
      <button className="btn btn-orange"  onClick={handleClick}>
        Increment
      </button>
      <h3>  
        {index}
      </h3>
     
    </>
  );
}

function App() {
  const [toogle, setToggle] = React.useState<boolean>(false)
  // const handleClickProps = ()=>{
  //   console.log('run handleProps');
  // }

  const [isChecked, setIsChecked] = React.useState(false);

 
  return (
    <>
    <div className="container mt-5">
    <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
              console.log(e.target.checked);
          }}
        />

        <button className='btn btn-orange' onClick={()=>{
          setToggle(!toogle)
        }}>Toogle Count</button>

        {toogle && <Count /> }
        <hr />
        <ButtonLike />
        <hr />
        <ModalState />
        <hr />
        <CarouselReact />

        <TestForm />

        {/* <EventsHandle onClick={handleClickProps} /> */}
    </div>
    </>
  )
}

export default App

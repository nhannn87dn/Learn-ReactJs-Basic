import React, { Fragment, ReactNode } from 'react';

import {FaGoogle, FaFacebook} from 'react-icons/fa';

import ButtonSocial from './components/ButtonSocial';

import './App.css';
// import Count from './components/Count';
import ButtonLike from './components/ButtonLike';
import TodoList from './components/TodoList';

const Button = ()=>{

  const handleClickButton = ()=>{
    console.log('Clicked !');
    alert('Da click');
  }
  return (
    <Fragment>
     <button onClick={handleClickButton}>Click me</button>
    </Fragment>
  )
}

type ButtonTypeProps = {
  onClick: () => void;
  children?: React.ReactNode;
}
  

type PlayButtonProp = {
  movieName: string
}


function Button2({onClick, children } : ButtonTypeProps) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }

function PlayButton({ movieName } : PlayButtonProp) {
  //function event handler
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button2 onClick={handlePlayClick}>Play "{movieName}"</Button2>
  );
}

type Button3Type = {
  onClick: () => void;
  children?: React.ReactNode;
}

function Button3({ onClick, children } : Button3Type) {
  return (
    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button3 onClick={() => alert('Playing!')}>
        Play Movie
      </Button3>
      <Button3 onClick={() => alert('Uploading!')}>
        Upload Image
      </Button3>
    </div>
  );
}

function ItemList({content, isDone} : {content: string, isDone: boolean}){
  //Conditional rendering
  // if(isDone == true){
  //   return (
  //     <li>{content} ✓</li>
  //   )
  // }

  let defaultContent = content;
  if(isDone === true){
    defaultContent += '✓';
  }
  
  return (
    <li style={{textDecoration: isDone === true ? 'line-through' : ''}}>{defaultContent}</li>
  )
}

function SallyList(){
  return (
    <div className="SallyList">
       <h2> Sally Ride Packing List</h2>
       <ul>
         <ItemList content="Space suit" isDone={true} />
         <ItemList content="Helmet wwith a golden" isDone={true} />
         <ItemList content="Photo of Tam" isDone={false}/>
       </ul>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Hello React - Softech</h1>
       <ButtonLike />
       <Button />
       <input type="text" onKeyDown={()=>{
        
        console.log('Ban da nhan phim ');
       }} />
       <PlayButton movieName="Minion" />
       <Toolbar />
       <SallyList />
       <TodoList />
    </div>
  );
}

export default App;

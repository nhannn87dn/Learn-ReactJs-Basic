import React, { Fragment, ReactNode } from 'react';

import {FaGoogle, FaFacebook} from 'react-icons/fa';

import ButtonSocial from './components/ButtonSocial';

import './App.css';


// Function component


type SayhelloType = {
  name: string;
  age: number;
  sex?: string;
}

function Sayhello({name, age, sex= 'Nữ'} : SayhelloType){
  return (
    <Fragment>
      <h1>Hello, {name}</h1>
      <p>I am a {age} years old person</p>
      <p>Giới tính: {sex}</p>
    </Fragment>
  );
}
// Tham số mặc định
Sayhello.defaultProps = {
  sex: 'Nữ'
}


function TodoList(){
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />
      <ul style={{fontSize: '16px', color: 'red'}}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>
    </>

  );
}



function App() {
  return (
    <div className="App">
      <h1>Hello React - Softech</h1>
      {/* Cách sử dụng component / gọi một component */}
      <ButtonSocial icon={<FaGoogle />} brand="Google" />
      <ButtonSocial icon={<FaFacebook />} brand='Facebook' />
      <Sayhello name="Lisa" age={25}  />
      <img src="" alt="" />
      <Sayhello name="Quang" age={22} />
      {/* dsdsakdsdjskadjk */}
      <TodoList />
    </div>
  );
}

export default App;

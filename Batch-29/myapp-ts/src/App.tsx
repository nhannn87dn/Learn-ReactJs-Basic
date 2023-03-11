import React, { Fragment, ReactNode } from 'react';

import {FaGoogle, FaFacebook} from 'react-icons/fa';

import ButtonSocial from './components/ButtonSocial';

import './App.css';
import Count from './components/Count';
import ButtonLike from './components/ButtonLike';


function App() {
  return (
    <div className="App">
      <h1>Hello React - Softech</h1>
       <ButtonLike />
    </div>
  );
}

export default App;

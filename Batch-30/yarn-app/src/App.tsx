//import ProductPage from "./pages/ProductPage";
import React, {useCallback, useState, useMemo} from 'react';
import "./styles/global.css";
import { UserProvider } from "./context/userContex";
//import LoginPage from "./pages/LoginPage";
//import CountReducer from './components/CountReducer';
import ZustandCount from './components/ZustandCount';
import ZustandCountActions from './components/ZustandCountActions';
import Greet from './components/Greet';

import Todos from './components/Todos';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';


const userInfo = {
  id: 1, 
  name: 'John',
  avatarUrl: 'http://'
}


const computeLetterCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
};

function App() {
  return (
    <>
    <ProductFilter />
    <hr />
    <ProductList />
    </>
  )
}

export default App;

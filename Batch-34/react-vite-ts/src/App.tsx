import React from 'react';

import './App.css'
import Product from './pages/Product';
import { userContext } from './contexts/userContex';
import CountApp from './components/CountApp';
import Todos from './components/Todos';
import HelloWorld from './components/HelloWorld';
import useBrowserWidth from './hooks/useBrowserWidth'

function App() {

  const user = {id: 1, name: 'John', email: 'john@example.com',avatarUrl: 'https://via.placeholder.com/100x100.png'};


  return (
    <>
    <CountApp />
    <hr />
    <HelloWorld />
    {/* <userContext.Provider value={user}>
        <Product />
    </userContext.Provider> */}
    </>
  )


    return (

      <>
    <userContext.Provider value={user}>
    <Product />
    </userContext.Provider>
     
      
      </>
    )
   
  
}

export default App

import './App.css';
import ReactHookForm from './components/ReactHookForm';
import ReactHookFormValidation from './components/ReactHookFormValidation';
import SimpleForm from './components/SimpleForm';
import UseEffectExample from './components/UseEffectExample';
import React from 'react'

import UseCallBackExample from './components/UseCallBackExample';
import UseMemoExample from './components/UseMemoExample';
import ProductPage from './pages/ProductPage';
import { userContext } from './context/userContext';

function App() {

  //const [isShow, setIsShow] = React.useState(false)
  
  const user = {id: 1, name: 'Ngoc Nhan'};

  return (
    <div className='container mx-auto'>
      <userContext.Provider value={user}>
          <ProductPage />
      </userContext.Provider>
      
        {/* <button className='btn btn-primary' onClick={()=>{
          setIsShow(!isShow)
        }}>Toogle Component</button>
        {
          isShow && <UseMemoExample />
        } */}
        
        {/* <SimpleForm />
        <hr />
        <ReactHookForm />
        <hr />
        <h2>ReactHook Form Validation</h2>
        <ReactHookFormValidation /> */}
    </div>
  )
}

export default App

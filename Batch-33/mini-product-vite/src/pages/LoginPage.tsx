import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();


  return (
    <div className='container'>
        <h1>LoginPage</h1>
        <button onClick={()=> {
            //Giả lập login thành công ==> nhảy về home
            navigate('/')
        }}>Login</button>
    </div>
  )
}

export default LoginPage
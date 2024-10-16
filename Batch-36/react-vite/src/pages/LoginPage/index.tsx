import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {useState} from 'react'
import useAuth from "../../hooks/useAuth";

const  LoginPage  =( ) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login,isLoading} = useAuth();

  return (
    <div>
      {/* Thay doi noi dung the title */}
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <h1>LoginPage Page</h1>

      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log('Submited', email, password);
        // Gọi API login
        const result = login(email, password);
        console.log(result);
      }}>
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} type="email" name="email" />
        <input  onChange={(e)=>{
          setPassword(e.target.value)
        }} type="password" name="password" />
        <button 
        disabled={isLoading} 
        className="btn btn-primary" type="submit"
        >
          {isLoading ? 'Loading....' : 'Login'}
          
          </button>
      </form>

      
      <button 
      className="btn btn-primary"
      onClick={()=>{
        console.log('Nhay den trang Home');
        //Gọi hàm chuyen trang
        navigate('/');
      }}
      >
        Go to Home
      </button>
    </div>
  )
}

export default LoginPage
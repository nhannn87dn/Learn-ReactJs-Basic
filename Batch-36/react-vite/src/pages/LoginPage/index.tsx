import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const  LoginPage  =( ) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Thay doi noi dung the title */}
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <h1>LoginPage Page</h1>

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
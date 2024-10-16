import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
//import { axiosClient } from '../../lib/axiosClient';

const Customers = () => {
  const {isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login')
      // //TODO: Nếu f5 thì bị out do state bị reset: isAuthenticated = false
      // //Cách fix: check thêm khi isAuthenticated = false, và local còn token
      // //thì cho phép truy cập đồng thời fetch lại thông tin cho state user
      // const token = localStorage.getItem('token');
      // if(!token){
      //   navigate('/login')
      // }else{
      //   const fetchProfile = async ()=>{
      //     const {data} = await axiosClient.get('https://api.escuelajs.co/api/v1/auth/profile');
      //     setUser(data);
      //   }
      //   fetchProfile();
      // }
     
    }
  },[isAuthenticated]);

  return (
    <>
    <h1 className='py-5'>Customers Page</h1>
      <div className="grid grid-cols-12">
          <div className="col-span-4">
            <ul>
              <li><Link to={'/customers'}>Dashboard</Link></li>
              <li><Link to={'/customers/orders'}>Danh sách đơn hàng</Link></li>
              <li><Link to={'/customers/profile'}>Thông tin cá nhân</Link></li>
              <li>
                <button type='button' onClick={logout}>Đăng Xuất</button>
              </li>
            </ul>
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
      </div>
    </>
  )
}

export default Customers
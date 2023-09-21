import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
1
const Customers = () => {
  const {isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login')
    }
  },[isAuthenticated])

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
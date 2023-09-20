import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Customers = () => {
  return (
    <>
    <h1 className='py-5'>Customers Page</h1>
      <div className="grid grid-cols-12">
          <div className="col-span-4">
            <ul>
              <li><Link to={'/customers'}>Dashboard</Link></li>
              <li><Link to={'/customers/orders'}>Danh sách đơn hàng</Link></li>
              <li><Link to={'/customers/profile'}>Thông tin cá nhân</Link></li>
              <li><Link to={'/customers/logout'}>Đăng xuất</Link></li>
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
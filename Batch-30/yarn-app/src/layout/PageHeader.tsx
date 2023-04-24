import React from 'react'
import { Outlet, Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <div>
      <ul style={{display: 'flex', columnGap: '20px'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default PageHeader
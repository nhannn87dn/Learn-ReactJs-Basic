import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          
          <li>
            <Link to="/parameter/1/nhan/email">Parameter parameter/1/nhan</Link>
          </li>
          <li>
            <Link to="/search">Search Query String</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageHeader
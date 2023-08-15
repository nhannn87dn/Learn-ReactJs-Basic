import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>
    <Link to='/product'>Manage Products</Link>
    </>
  )
}

export default HomePage
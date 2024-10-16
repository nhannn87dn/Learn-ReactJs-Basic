import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
     <Header  />
      <main>
          <div className="container">
          <Outlet />
          </div>
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
import React from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
        <PageHeader />
         <main>
          <Outlet />
         </main>
        <PageFooter />
    </div>
  )
}

export default Layout
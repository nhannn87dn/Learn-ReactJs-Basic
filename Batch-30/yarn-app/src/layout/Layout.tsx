import React from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <PageHeader />
        <main>
            <Outlet />
        </main>
        <PageFooter />
    </>
  )
}

export default Layout
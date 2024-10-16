import {Fragment} from 'react'
import { Outlet } from 'react-router-dom'

const EmptyLayout = () => {
  return (
    <Fragment>
    <Outlet />
    </Fragment>
  )
}

export default EmptyLayout
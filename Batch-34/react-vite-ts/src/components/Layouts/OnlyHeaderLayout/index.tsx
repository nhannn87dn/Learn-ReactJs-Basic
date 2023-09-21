import Header from '../Header'
import { Outlet } from 'react-router-dom'

const OnlyHeaderLayout = () => {
  return (
    <>
     <Header  />
      <main>
          <div className="container">
          <Outlet />
          </div>
      </main>
    </>
  )
}

export default OnlyHeaderLayout
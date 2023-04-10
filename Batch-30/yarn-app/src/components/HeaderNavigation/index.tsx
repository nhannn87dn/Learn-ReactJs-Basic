import React from 'react'

const HeaderNavigation = ({children}: {children?: React.ReactNode}) => {
  return (
    <nav>
        <ul className='main-nav d-flex'>
            {children}
        </ul>
    </nav>
  )
}

export default HeaderNavigation
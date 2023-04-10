import React from 'react'

const Main = ({children} : {children?: React.ReactNode}) => {
  return (
    <main>
        <div className="container">

        {children}
        </div>
    </main>
  )
}

export default Main
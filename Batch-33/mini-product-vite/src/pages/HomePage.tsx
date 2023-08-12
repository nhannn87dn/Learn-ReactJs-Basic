import React from 'react'

const HomePage = () => {
  React.useEffect(()=> {
    document.title = 'Home Page';
  },[])
  return (
    <>
    
    <div className="container">

    <h1>HomePage</h1>
    <a href="https:24h.com.vn" target='_blank'>24h.com.vn</a>
    </div>
    
    </>
  )
}

export default HomePage
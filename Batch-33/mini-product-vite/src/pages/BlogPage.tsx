import React from 'react'

const BlogPage = () => {

  React.useEffect(()=> {
    document.title = 'Blog Page';
  },[])

  return (
    <>
    <div className="container">

    <h1>BlogPage</h1>
    <a href="https:24h.com.vn" target='_blank'>24h.com.vn</a>
    </div>
    </>
  )
}

export default BlogPage
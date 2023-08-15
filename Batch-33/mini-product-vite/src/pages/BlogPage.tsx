import React from 'react'
import FakeProducts from '../components/FakeProducts';
import FakeFilterProducts from '../components/FakeProducts/FakeFilterProducts';

const BlogPage = () => {

  React.useEffect(()=> {
    document.title = 'Blog Page';
  },[])

  return (
    <>
    <div className="container">

    <h1>BlogPage</h1>
      <FakeFilterProducts />
      <FakeProducts />
    </div>
    </>
  )
}

export default BlogPage
import React from 'react'
import useFakeProducts from '../../hooks/useFakeProducts'

const FakeProducts = () => {

  const {products, isLoading, fetchProducts} = useFakeProducts();

  React.useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      <h1>FakeProducts</h1>
      {isLoading && <div>Loading.....</div>}
      {
        products.map(product=> {
          return (
            <li>{product.title} - {product.price} - CatID: {product.category.id}</li>
          )
        })
      }
    </div>
  )
}

export default FakeProducts
import React from 'react'
import useFakeProducts from '../../hooks/useFakeProducts'

const FakeFilterProducts = () => {
  const {filterProducts,fetchProducts} = useFakeProducts()
  return (
    <div>
      <h2>FakeFilterProducts</h2>
      <button onClick={()=>filterProducts(4)}>Filter Category 4</button>
      <button onClick={()=>filterProducts(3)}>Filter Category 3</button>
      <button onClick={fetchProducts}>Reset Filter</button>
    </div>
  )
}

export default FakeFilterProducts
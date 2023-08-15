import React from 'react'
import Products from '../components/Products'
import AddProduct from '../components/AddProduct'

const ProductPage = () => {
  return (
    <>
         <h1>Product Management</h1>
         <AddProduct />
        <Products />
    </>
  )
}

export default ProductPage
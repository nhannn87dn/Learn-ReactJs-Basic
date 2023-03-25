import React from 'react'
import { products } from './data'
import "./product.css";

type ProductType = {
    id: number,
    name: string,
    price: number,
    priceSale: number,
    discount: number,
    photo: string
}

const ProductItem = ({product} : {product: ProductType})=>{
    return (
        <div className='product_Item'>
        <div className="discount">-{product.discount}%</div>
        <img src={product.photo} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>{product.priceSale} <del>{product.price}</del></p>
        </div>
    )
}



const MoviesList = () => {
  return (
    <div className='product_wrapper'>
        <div className='product_Item'>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt=""/>
          <h2>John Wick: Chapter 4</h2>
          <p>65%</p>
          <p>ngay</p>
        </div>
        <div className='product_Item'>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt=""/>
          <h2>John Wick: Chapter 4</h2>
          <p>65%</p>
          <p>ngay</p>
        </div>
        <div className='product_Item'>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt=""/>
          <h2>John Wick: Chapter 4</h2>
          <p>65%</p>
          <p>ngay</p>
        </div>
        <div className='product_Item'>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt=""/>
          <h2>John Wick: Chapter 4</h2>
          <p>65%</p>
          <p>ngay</p>
        </div>
    </div>
  )
}

const ProductList = () => {
  return (
    <div className='product_wrapper'>
        {products.map(product => <ProductItem product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList
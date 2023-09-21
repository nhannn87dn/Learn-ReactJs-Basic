import React from 'react'
import {products} from '../../data/products'
import numeral from 'numeral';

type SingleProductProps = {
    id: number;
    name: string;
    price: number;
    promoPrice: number;
    thumb: string;
}

const SingleProduct = ({products}: {products: SingleProductProps})=>{

    const discount = products.promoPrice > 0 ?  Math.round(100 - (products.promoPrice * 100 / products.price)) : 0;
    

    return (
        <div className="item">
            <div className="thumb">
                <img src={products.thumb} alt="" />
            </div>
            <h3>{products.name} {discount > 0 ? `${discount} %` : null }</h3>
            <div className='price'>
                {
                    products.promoPrice > 0 ? (
                       <>
                        <strong>{numeral(products.promoPrice).format('0,0$')}</strong>
                        <del>{numeral(products.price).format('0,0$')}</del>
                       </>
                    )
                    : (
                        <strong>{numeral(products.price).format('0,0$')}</strong>
                    )
                }
                
            </div>
        </div>
    )
}

const ProductsList = () => {
   

  return (
    <div  className='product_list'>
        {
            products.map((product)=> <SingleProduct key={`ProductsList_${product.id}`} products={product} />)
        }
        
    </div>
  )
}

export default ProductsList
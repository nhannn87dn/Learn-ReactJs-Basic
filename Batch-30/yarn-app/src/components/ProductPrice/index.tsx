import React from 'react'

const ProductPrice = ({price=0, salePrice=0}: {price: number, salePrice?: number}) => {
  return (
    <>
        {salePrice > 0 ? (
            <div className="product_price">
            <strong>{salePrice.toLocaleString('it-IT')}đ</strong>
            <del>{price.toLocaleString('it-IT')}đ</del>
            </div>
        )
        : (
            <div className="product_price">
            <strong>{price}</strong>
            </div>
        )

        
        }
   </>
  )
}

export default ProductPrice
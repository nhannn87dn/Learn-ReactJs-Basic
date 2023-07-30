import React from "react";
import {products} from  './../../data/products.ts'
import styles from './ProductsList.module.css'

type ProductItemType = {
  id: number;
  name: string;
  price: number;
  promoPrice: number;
  thumb: string;
};

const ProductItem = ({product}: {product: ProductItemType} ) => {
  let discount = 0;
  if (product.promoPrice > 0) {
    discount = 100 - (100 * product.promoPrice) / product.price;
  }

  return (
    <div data-id={product.id} className={styles.product_item}>
      {/* Conditional rendering */}
      {discount > 0 && <span className={styles.discount}>-{`${discount} %`}</span>}

      <img src={product.thumb} alt={product.name} />
      <h3>{product.name}</h3>
      <div className={styles.price}>
        {product.promoPrice > 0 ? (
          <>
            <strong>{product.promoPrice}</strong>
            <del>{product.price}</del>
          </>
        ) : (
          <strong>{product.price}</strong>
        )}
      </div>
    </div>
  );
};

const ProductsList = () => {

    //Có thể dùng hàm filter để lọc lại danh sách
    // const promoProducts = products.filter(product => product.promoPrice === 0)

  return <div className={styles.product_wrapper}>
        {
            products.map((item) =>{
                return <ProductItem key={`ProductsList_${item.id}`} product={item} />
            })
        }
  </div>;
};

export default ProductsList;

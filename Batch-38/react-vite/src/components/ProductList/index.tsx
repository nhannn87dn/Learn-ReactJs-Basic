import { products } from "../../data/products";

console.log("<<=== 🚀 products ===>>", products);

const ProductsList = () => {
  return (
    <div className="product_list flex">
      {products.map((product) => {
        let discount = 0;
        if (product.promoPrice) {
          discount = 100 - (product.promoPrice * 100) / product.price;
        }
        return (
          <div className="item">
            {discount > 0 ? <span>-{discount}%</span> : null}
            <img src={product.thumb} alt={product.name} />
            <h3>{product.name}</h3>
            {product.promoPrice && product.promoPrice > 0 ? (
              <div className="price">
                <strong>{product.promoPrice}</strong>
                <del>{product.price}</del>
              </div>
            ) : (
              <div className="price">
                <strong>{product.price}</strong>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;

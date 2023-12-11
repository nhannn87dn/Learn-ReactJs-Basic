import { products } from "../../data/products";

type TSingleProduct = {
  price: number;
  name: string;
  promoPrice?: number;
};

const SingleProduct = ({ name, price, promoPrice }: TSingleProduct) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <div className="price">
        {promoPrice && promoPrice > 0 ? (
          <>
            <strong>{promoPrice}</strong>
            <del>{price}</del>
          </>
        ) : (
          <strong>{price}</strong>
        )}
      </div>
    </div>
  );
};

const ProductsList = () => {
  return (
    <div>
      <h2>ProductsList</h2>
      {products.map((product) => {
        return (
          <SingleProduct
            key={`ProductsList_${product.id}`}
            name={product.name}
            price={product.price}
            promoPrice={product.promoPrice ? product.promoPrice : 0}
          />
        );
      })}
      {/* <SingleProduct name="San Pham A" price={245} />
      <SingleProduct name="San Pham B" price={560} promoPrice={500} /> */}
    </div>
  );
};

export default ProductsList;

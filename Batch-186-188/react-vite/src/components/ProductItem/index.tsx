type TProduct = {
  thumb: string;
  name: string;
  price: number;
  promoPrice?: number;
};
const ProductItem = ({ thumb, name, price, promoPrice = 0 }: TProduct) => {
  const percent = Math.round(((price - promoPrice) / price) * 100);

  console.log(percent);

  return (
    <div className="product-item">
      {promoPrice > 0 ? <span>{percent}%</span> : null}
      <div className="product-thumbnail">
        <img width={160} src={thumb} alt={name} />
      </div>
      <h3>{name}</h3>
      <div className="product-price">
        {promoPrice > 0 ? (
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

export default ProductItem;

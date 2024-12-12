interface IProduct {
  thumbnail: string;
  name: string;
  price: number;
  promoPrice?: number;
}
export default function ProductItem({
  thumbnail,
  name,
  price,
  promoPrice = 0,
}: IProduct) {
  //Tính giá trị discount
  const discount = Math.round(((price - promoPrice) / price) * 100);
  return (
    <div className="product-item relative">
      {discount < 100 ? (
        <span className="discount absolute top-1 left-1 bg-orange-500 text-white rounded py-1 px-2 text-[12px]">
          {discount}%
        </span>
      ) : null}

      <div className="product-thumbnail">
        <img src={thumbnail} alt={name} />
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
}

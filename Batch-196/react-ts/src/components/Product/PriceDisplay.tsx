import numeral from "numeral";

const PriceDisplay = ({
  price,
  promoPrice,
}: {
  price: number;
  promoPrice: number;
}) => {
  console.log("PriceDisplay rendered");
  return (
    <>
      {promoPrice > 0 ? (
        <div className="product_price">
          <strong>{numeral(promoPrice).format("0,0") + " ₫"}</strong>
          <del>{numeral(price).format("0,0") + " ₫"}</del>
        </div>
      ) : (
        <div className="product_price">
          <strong>{numeral(price).format("0,0") + " ₫"}</strong>
        </div>
      )}
    </>
  );
};

export default PriceDisplay;

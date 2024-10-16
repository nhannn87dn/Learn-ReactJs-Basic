import Price from "./Price";

const ProductCard = () => {
  console.log("ProductCard render");
  return (
    <div>
      <h3>Product Name</h3>
      {/* <strong>800</strong> */}
      <Price />
    </div>
  );
};

export default ProductCard;

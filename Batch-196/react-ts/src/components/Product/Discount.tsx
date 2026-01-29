const Discount = ({ discount = 0 }: { discount?: number }) => {
  console.log("Discount rendered");
  return <>{discount > 0 && <div>Giảm {Math.round(discount)}%</div>}</>;
};

export default Discount;

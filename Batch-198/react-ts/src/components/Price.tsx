const Price = () => {
  const price = 629000;
  const originalPrice = 1990000;
  return (
    <>
      <strong
        style={{
          //chuyển hết thành camelCase
          color: "red",
          fontSize: "28px",
          backgroundColor: "yellow",
        }}
      >
        {price}
      </strong>
      <del>{originalPrice}</del>
    </>
  );
};

export default Price;

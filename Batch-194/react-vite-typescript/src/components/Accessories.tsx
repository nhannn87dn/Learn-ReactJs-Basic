const products = [
  {
    id: 1,
    productName: "Cáp chuyển đổi USB-C sang SD",
    price: 1290000,
    promoPrice: 790000,
    thumbnail:
      "https://raw.githubusercontent.com/nhannn87dn/Learn-ReactJs-Basic/refs/heads/main/5.Demo-Projects/images/cap-chuyen-doi-usb-c-sang-sd-thumb.png",
  },
  {
    id: 2,
    productName: "Adapter sạc Apple Type C 20W",
    price: 520000,
    promoPrice: 0,
    thumbnail:
      "https://raw.githubusercontent.com/nhannn87dn/Learn-ReactJs-Basic/refs/heads/main/5.Demo-Projects/images/adapter-sac-apple-type-c-20w-thumb.png",
  },
  {
    id: 3,
    productName: "Cáp sạc Lightning 2m",
    price: 840000,
    promoPrice: 0,
    thumbnail:
      "https://raw.githubusercontent.com/nhannn87dn/Learn-ReactJs-Basic/refs/heads/main/5.Demo-Projects/images/cap-sac-lightning-2m-thumb.png",
  },
  {
    id: 4,
    productName: "AirPods 3",
    price: 1450000,
    promoPrice: 890000,
    thumbnail:
      "https://raw.githubusercontent.com/nhannn87dn/Learn-ReactJs-Basic/refs/heads/main/5.Demo-Projects/images/airpods-3-thumb.png",
  },
];

interface IProduct {
  id: number;
  productName: string;
  price: number;
  promoPrice: number;
  thumbnail: string;
}

const ProductItem = ({ product }: { product: IProduct }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.productName} />
      <h3>{product.productName}</h3>
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
};

const Accessories = () => {
  return (
    <div className="my-5">
      <h1>Accessories</h1>
      <div className="product-list flex gap-x-[20px]">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Accessories;

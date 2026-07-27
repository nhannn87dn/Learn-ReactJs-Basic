import styles from "./Accessories.module.css";

const products = [
  {
    id: 1,
    name: "Cáp chuyển đổi sang SD",
    price: 1290000,
    promoPrice: 790000,
    thumbnail: "images/cap-chuyen-doi-usb-c-sang-sd-thumb.png",
  },
  {
    id: 2,
    name: "Adapter sạc apple type C",
    price: 520000,
    promoPrice: 0,
    thumbnail: "images/adapter-sac-apple-type-c-20w-thumb.png",
  },
  {
    id: 3,
    name: "Cáp sạc lightning",
    price: 840000,
    promoPrice: 0,
    thumbnail: "images/cap-sac-lightning-2m-thumb.png",
  },
  {
    id: 4,
    name: "AirPod 3",
    price: 1450000,
    promoPrice: 810000,
    thumbnail: "images/airpods-3-thumb.png",
  },
];
type TProductProp = {
  id: number;
  name: string;
  price: number;
  promoPrice: number;
  thumbnail: string;
};

const ProductItem = ({ product }: { product: TProductProp }) => {
  let discount = 0;
  if (product.promoPrice > 0 && product.price > 0) {
    // Làm tròn số nguyên bằng Math.round
    discount = Math.round(
      ((product.price - product.promoPrice) / product.price) * 100,
    );
  }
  return (
    <div className={styles.product_item}>
      {discount > 0 && <span className={styles.discount}>-{discount}%</span>}
      <div className="product-thumb">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      {product.promoPrice > 0 ? (
        <div className={styles.price}>
          <strong>{product.promoPrice}</strong>
          <del>{product.price}</del>
        </div>
      ) : (
        <div className={styles.price}>
          <strong>{product.price}</strong>
        </div>
      )}
    </div>
  );
};

const Accessories = () => {
  return (
    <div>
      <h2>Phụ kiện tương thích</h2>
      <div className={styles.product_list}>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Accessories;

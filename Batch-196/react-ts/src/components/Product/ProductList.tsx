import Discount from "./Discount";
import PriceDisplay from "./PriceDisplay";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Máy Lọc Không Khí Xiaomi Mi Air Purifier Gen 4 Pro",
      price: 1725000,
      promoPrice: 1125000,
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/333574/oppo-reno13-f-purple-thumbnew-600x600.jpg",
    },
    {
      id: 2,
      name: "Robot Hút Bụi Lau Nhà Xiaomi Roborock S7",
      price: 6660000,
      promoPrice: 0,
      thumb:
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358095/macbook-pro-14-inch-nano-m5-24gb-512gb-den-638962956337824725-600x600.jpg",
    },
    {
      id: 3,
      name: "Cáp chuyển đổi USB-C sang SD",
      price: 1290000,
      promoPrice: 780000,
      thumb:
        "https://cdn.tgdd.vn/Products/Images/54/329154/airpods-4-mxp63-thumb-new-600x600.jpg",
    },
    {
      id: 4,
      name: "Adapter sạc Apple Type C 20W",
      price: 520000,
      promoPrice: 0,
      thumb:
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5693/328648/may-in-nhiet-di-dong-hprt-mt810-bluetooth-hong-021024-055735-528-600x600.jpg",
    },
  ];
  console.log("ProductList rendered");
  return (
    <div className={styles.product_list}>
      {products.map((product) => {
        let discount = 0;
        if (product.promoPrice > 0) {
          discount =
            ((product.price - product.promoPrice) / product.price) * 100;
        }
        return (
          <div className={styles.product_item} key={product.id}>
            <Discount discount={discount} />
            <div className="product_thumb">
              <img
                width={160}
                height={160}
                src={product.thumb}
                alt={product.name}
              />
            </div>
            <h3>{product.name}</h3>
            <PriceDisplay
              price={product.price}
              promoPrice={product.promoPrice}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

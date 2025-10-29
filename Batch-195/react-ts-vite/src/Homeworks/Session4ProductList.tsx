import { formatPrice } from "../ultis/formart";

interface ProductItemProps {
  name: string;
  price: number;
  oldPrice: number | null;
  image: string;
}
const ProductItem = ({ name, price, oldPrice, image }: ProductItemProps) => {
  //calculate discount percentage
  const discountPercentage = oldPrice
    ? ((oldPrice - price) / oldPrice) * 100
    : 0;
  return (
    <div className="product-item flex-1">
      <div className="product-thumb rounded-lg overflow-hidden relative">
        <img src={image} alt={name} />
        {oldPrice && (
          <span className="absolute bottom-0 left-2 z-1 bg-amber-600 text-white rounded-full px-2 text-sm flex py-1">
            -{discountPercentage.toFixed(0)}%
          </span>
        )}
      </div>
      <h3 className="product-title my-2 h-[50px] overflow-hidden">{name}</h3>
      <div className="product-price text-gray-600">
        {oldPrice ? (
          <>
            <strong className="text-red-500">{formatPrice(price)}</strong>
            <span className="line-through text-gray-400 ml-2">
              {formatPrice(oldPrice)}
            </span>
          </>
        ) : (
          <strong className="text-red-500">{formatPrice(price)}</strong>
        )}
      </div>
    </div>
  );
};

const Session4ProductList = () => {
  const products = [
    {
      name: "Giày bóng rổ Sneaker nam",
      price: 699000,
      oldPrice: null,
      image: "./images/p1.jpg",
    },
    {
      name: "Giày bóng rổ nam Anta A-SHOCK 2020",
      price: 840000,
      oldPrice: 1539000,
      image: "./images/p2.jpg",
    },
    {
      name: "Dụng cụ tập cơ bụng đa năng có đế hút chân không",
      price: 88000,
      oldPrice: null,
      image: "./images/p3.jpg",
    },
    {
      name: "Combo Khung Bóng Rổ +Bóng +Lưới",
      price: 224000,
      oldPrice: null,
      image: "./images/p4.jpg",
    },
    {
      name: "Giày Thể Thao Nữ Biti's Hunter X DSWH03401",
      price: 800000,
      oldPrice: null,
      image: "./images/p5.jpg",
    },
  ];

  return (
    <div className="cate_product py-2 px-2">
      <div className="cate_product-header flex justify-between items-center mb-4">
        <h2 className="cate_product-title uppercase">Thể thao Dã ngoại</h2>
        <div className="cate_product-extra">
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>
      </div>
      <div className="product-list flex gap-x-[10px]">
        {products.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Session4ProductList;

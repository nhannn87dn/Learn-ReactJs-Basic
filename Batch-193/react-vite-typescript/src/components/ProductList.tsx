interface IProductCartProps {
  thumbnail: string;
  name: string;
  price: number;
  promoPrice?: number; //ko bắt buộc có giá km
}
const ProductCard = ({
  thumbnail,
  name,
  price,
  promoPrice,
}: IProductCartProps) => {
  return (
    <div className="item border border-slate-200 flex-1">
      <img className="w-[200px] h-[200px]" src={thumbnail} alt="" />
      <h3>{name}</h3>
      {promoPrice && promoPrice < price ? (
        <div className="price flex">
          <strong className="text-red-500">{promoPrice}</strong>
          <del>{price}</del>
        </div>
      ) : (
        <div className="price flex">
          <strong className="text-red-500">{price}</strong>
        </div>
      )}
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "OPPO Reno13 5G 12GB/256GB",
    thumbnail:
      "https://cdn.tgdd.vn/Products/Images/42/332934/TimerThumb/oppo-reno13-5g-(62).jpg",
    price: 1200000,
    promoPrice: 790000,
  },
  {
    id: 2,
    name: "OPPO A60 8GB/256GB",
    thumbnail:
      "https://cdn.tgdd.vn/Products/Images/42/323544/TimerThumb/oppo-a60-256gb-(74).jpg",
    price: 590000,
    promoPrice: 0,
  },
  {
    id: 3,
    name: "Asus Vivobook 15 X1504ZA",
    thumbnail:
      "https://cdn.tgdd.vn/Products/Images/44/312414/TimerThumb/312414.jpg",
    price: 890000,
    promoPrice: 0,
  },
  {
    id: 4,
    name: "CANDINO 34 mm Nữ C4498",
    thumbnail: "https://cdn.tgdd.vn/2024/09/timerseo/286638.jpg",
    price: 690000,
    promoPrice: 0,
  },
  {
    id: 5,
    name: "Philips SPK7448",
    thumbnail:
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/86/338173/chuot-bluetooth-philips-spk7448-160525-113102-604-600x600.jpg",
    price: 190000,
    promoPrice: 0,
  },
];

const ProductList = () => {
  return (
    <div className="product_list my-5 flex gap-x-4">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            thumbnail={product.thumbnail}
            price={product.price}
            promoPrice={product.promoPrice}
          />
        );
      })}

      {/* <ProductCard
        name="OPPO A60 8GB/256GB"
        thumbnail="https://cdn.tgdd.vn/Products/Images/42/323544/TimerThumb/oppo-a60-256gb-(74).jpg"
        price={590000}
      />
      <ProductCard
        name="Asus Vivobook 15 X1504ZA"
        thumbnail="https://cdn.tgdd.vn/Products/Images/44/312414/TimerThumb/312414.jpg"
        price={890000}
      />
      <ProductCard
        name="CANDINO 34 mm Nữ C4498"
        thumbnail="https://cdn.tgdd.vn/2024/09/timerseo/286638.jpg"
        price={690000}
      /> */}
    </div>
  );
};

export default ProductList;

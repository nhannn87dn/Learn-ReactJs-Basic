const data = {
  top: [
    {
      id: 1,
      name: "top 1",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 2,
      name: "top 2",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 3,
      name: "top 3",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
  ],
  best: [
    {
      id: 1,
      name: "best 1",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 2,
      name: "best 2",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 3,
      name: "best 3",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
  ],
  lasted: [
    {
      id: 1,
      name: "lasted 1",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 2,
      name: "lasted 2",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
    {
      id: 3,
      name: "lasted 3",
      price: 49,
      thumbnail: "images/nokia.jpg",
    },
  ],
};

type TProduct = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
};

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <div className="product-item flex gap-x-2">
      <div className="thumbnail w-15 overflow-hidden">
        <img
          className="w-full h-auto"
          src={product.thumbnail}
          alt={product.name}
        />
      </div>
      <div className="info flex-1">
        <h3>{product.name}</h3>
        <div className="price">
          <strong>{product.price}</strong>
        </div>
      </div>
    </div>
  );
};

const Exercise7Homeworks4 = () => {
  return (
    <div className="recommend-wrapper max-w-xl mx-auto flex gap-x-3">
      <div className="top-products flex-1">
        <h2 className="font-bold uppercase mb-5">Top Products</h2>
        <div className="top-product-list flex flex-col gap-y-5">
          {data.top.map((product) => {
            return <ProductItem key={`top-${product.id}`} product={product} />;
          })}
        </div>
      </div>
      <div className="best-products  flex-1">
        <h2 className="font-bold uppercase  mb-5">Best Products</h2>
        <div className="best-product-list flex flex-col gap-y-5">
          {data.best.map((product) => {
            return <ProductItem key={`best-${product.id}`} product={product} />;
          })}
        </div>
      </div>
      <div className="lasted-products  flex-1">
        <h2 className="font-bold uppercase  mb-5">Lasted Products</h2>
        <div className="lasted-product-list flex flex-col gap-y-5">
          {data.lasted.map((product) => {
            return (
              <ProductItem key={`lasted-${product.id}`} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exercise7Homeworks4;

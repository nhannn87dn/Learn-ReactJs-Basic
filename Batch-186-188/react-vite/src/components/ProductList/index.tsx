import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type TProductList = {
  isLoading: boolean;
  data: TProduct[] | undefined;
};

const ProductList = ({ isLoading, data }: TProductList) => {
  return (
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="product_list grid grid-cols-4 gap-[20px]">
          {data &&
            data.length > 0 &&
            data.map((product) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="product_item"
                >
                  <div className="product_thumb w-full h-[305px] bg-slate-400 flex justify-center">
                    {/* <img
                      className="w-auto h-full"
                      src={product.image}
                      alt={product.title}
                    /> */}
                  </div>
                  <h3 className="product_name">{product.title}</h3>
                  <div className="product_price">
                    <strong>{product.price}</strong>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ProductList;

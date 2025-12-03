import { Link } from "react-router";
import AddToCart from "./AddToCart";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const ProductList = ({ data }: { data: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 ">
      {data?.map((product: IProduct) => (
        <div key={product.id} className="border p-4 mb-4">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            ></img>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-red-600">${product.price}</p>
          </Link>
          <div className="prod">
            <AddToCart
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images[0],
                quantity: 1,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

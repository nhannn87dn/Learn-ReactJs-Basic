import { Link } from "react-router";

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
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="border p-4 mb-4"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-cover"
          ></img>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-red-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;

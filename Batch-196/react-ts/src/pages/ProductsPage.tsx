import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router";

interface IProduct {
  title: string;
  id: number;
  slug: string;
  price: string;
  images: string[];
}

const getPaginationProducts = async (page: number, limit: number) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=${(page - 1) * limit}&limit=${limit}`,
  );
  return response.data;
};

const ProductsPage = () => {
  const [params] = useSearchParams();
  const p = params.get("page") || "1";
  const page = parseInt(p);
  const limit = 10;
  //get products with react query
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products", page, limit],
    queryFn: () => getPaginationProducts(page, limit),
  });

  console.log("products", products);

  return (
    <main className="container mx-auto">
      <h1>ProductsPage</h1>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-5">
          {products &&
            products.map((product) => {
              return (
                <div key={product.id} className="border p-4 mb-4">
                  <Link to={`/products/${product.slug}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    ></img>
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-red-600">${product.price}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
      <div className="pagination flex justify-center space-x-4 my-8">
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/products?page=1"
        >
          1
        </Link>
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/products?page=2"
        >
          2
        </Link>
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/products?page=3"
        >
          3
        </Link>
      </div>
    </main>
  );
};

export default ProductsPage;

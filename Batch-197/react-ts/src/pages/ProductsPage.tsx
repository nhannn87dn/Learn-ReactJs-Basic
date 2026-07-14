import { Button } from "@/components/ui/button";
import { useShoppingCartStore } from "@/stores/useShoppingCart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router";

type TProduct = {
  id: number;
  slug: string;
  title: string;
  price: number;
  images: string[];
};

const getProducts = async (page: number = 1): Promise<TProduct[]> => {
  const limit = 10;
  const offset = (page - 1) * limit;

  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
  );

  return response.data;
};

const ProductsPage = () => {
  const { addToCart } = useShoppingCartStore();
  const [params] = useSearchParams();
  const page = params.get("page") ? Number(params.get("page")) : 1;
  //const limit = params.get("limit") ? Number(params.get("limit")) : 10;

  const queryProducts = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
  });

  if (queryProducts.isLoading) {
    return (
      <div className="flex justify-center py-20">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (queryProducts.isError) {
    return (
      <div className="flex justify-center py-20">
        <p>Có lỗi xảy ra.</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Helmet>
        <title>Products List page</title>
      </Helmet>
      <h1 className="mb-8 text-3xl font-bold">Danh sách sản phẩm</h1>

      <div className="grid grid-cols-4 gap-6">
        {queryProducts.data?.map((product) => (
         <div
                     key={product.id}
            className="overflow-hidden rounded-xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"

         >
           <Link
            to={`/products/${product.slug}`}
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-56 w-full object-cover"
            />

            <div className="space-y-3 p-4">
              <h2 className="line-clamp-2 h-12 font-semibold">
                {product.title}
              </h2>

              <p className="text-2xl font-bold text-red-600">
                ${product.price}
              </p>

              <button className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
                Xem chi tiết
              </button>
            </div>
          </Link>
          <Button onClick={()=>{
            console.log(product);
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
            });

          }}>Add To Cart</Button>
         </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-2">
          <Link
            to="/products?page=1"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition hover:bg-blue-500 hover:text-white"
          >
            1
          </Link>

          <Link
            to="/products?page=2"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition hover:bg-blue-500 hover:text-white"
          >
            2
          </Link>

          <Link
            to="/products?page=3"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition hover:bg-blue-500 hover:text-white"
          >
            3
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;

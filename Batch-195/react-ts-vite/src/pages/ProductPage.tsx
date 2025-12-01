import { useQuery } from "@tanstack/react-query";
import ProductList from "../components/ProductList";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useSearchParams } from "react-router";

const fetchProducts = async (offset: number, limit: number) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );
  return response.data;
};

const ProductPage = () => {
  /** Lấy chỉ số trang để phân trang */
  const [params] = useSearchParams();
  const page = params.get("page") || "1";
  const limit = 5;
  const offset = (parseInt(page) - 1) * limit;

  /** Gọi API lấy danh sách sản phẩm theo số trang */
  const queryProducts = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(offset, limit),
  });
  console.log("<<=== 🚀 queryProducts.data ===>>", queryProducts.data);
  return (
    <main className="container mx-auto">
      <h1>Product Page</h1>
      {queryProducts.isError && <p>Error loading products.</p>}
      {queryProducts.isLoading ? (
        <div className="loading-skeleton grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-5">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              <Skeleton height={150} className="w-full" />
              <Skeleton height={20} className="my-2" />
              <Skeleton height={20} className="w-3/4" />
            </div>
          ))}
        </div>
      ) : (
        <ProductList data={queryProducts.data} />
      )}
      <div className="pagination flex justify-center space-x-4 my-8">
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/product?page=1"
        >
          1
        </Link>
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/product?page=2"
        >
          2
        </Link>
        <Link
          className="border border-gray-600 rounded py-1 px-2"
          to="/product?page=3"
        >
          3
        </Link>
      </div>
    </main>
  );
};

export default ProductPage;

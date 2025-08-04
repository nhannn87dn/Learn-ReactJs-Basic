import { useQuery } from "@tanstack/react-query";
import { getPaginationProducts } from "../services/product.service";
import type { IProductResponse } from "../types/product.type";
import { Link, useSearchParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useShoppingCartStore } from "../stores/useShoppingCart";

const ProductsPage = () => {
  const [params] = useSearchParams();

  const { addItem } = useShoppingCartStore();

  const page = params.get("page");
  const pageInt = page ? Number(page) : 1;
  const limit = 10;
  const skip = (pageInt - 1) * limit;

  console.log(page);

  const queryProducts = useQuery<IProductResponse, Error>({
    queryKey: ["products", limit, pageInt],
    queryFn: () => getPaginationProducts({ limit, skip }),
  });

  console.log("<<=== 🚀 queryProducts.data ===>>", queryProducts.data);
  return (
    <>
      <title>Products Page</title>
      <main className="container mx-auto">
        <h1>Products Page</h1>
        {queryProducts.isLoading ? (
          <div className="products-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="product-item">
                <Skeleton className="w-full h-48 " />
                <Skeleton className="h-4 w-3/4 " />
                <Skeleton className="h-4 w-1/2 " />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="products-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {queryProducts.data &&
                queryProducts.data.products.length > 0 &&
                queryProducts.data.products.map((p) => {
                  return (
                    <div
                      className="product-item border border-slate-100 rounded p-3"
                      key={p.id}
                    >
                      <Link to={`/products/${p.id}`}>
                        <div className="thumbnail w-full h-48 overflow-hidden flex justify-center">
                          <img
                            className="h-auto max-h-48"
                            src={p.thumbnail}
                            alt=""
                          />
                        </div>
                        <h3>{p.title}</h3>
                        <div className="price">
                          <strong className="text-red-500">{p.price}</strong>
                        </div>
                      </Link>
                      <div className="action flex justify-center">
                        <button
                          onClick={() => {
                            console.log(p.id);
                            addItem({
                              id: p.id,
                              title: p.title,
                              price: p.price,
                              thumbnail: p.thumbnail,
                              quantity: 1,
                            });
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="pagination my-3 flex gap-x-2">
              <Link
                className="border border-slate-200 rounded py-1 px-2"
                to="/products?page=1"
              >
                1
              </Link>
              <Link
                className="border border-slate-200 rounded py-1 px-2"
                to="/products?page=2"
              >
                2
              </Link>
              <Link
                className="border border-slate-200 rounded py-1 px-2"
                to="/products?page=3"
              >
                3
              </Link>
            </div>
          </>
        )}
      </main>
      ;
    </>
  );
};

export default ProductsPage;

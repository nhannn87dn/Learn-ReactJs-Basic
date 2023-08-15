import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: object;
}

const ProductsListAPI = ({offset = 0, limit = 10}: {offset: number, limit:number}) => {
  const fetchProducts = (offset:number, limit:number) => {
    const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;
    return fetch(url).then((res) => res.json());
  }
   
    
  // Sử dụng useQuery để fetch data từ API
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products", 0, {offset, limit}],
    queryFn: ()=> fetchProducts(offset, limit),
  });

  console.log("ProductsListAPI", data);

  return (
    <div>
      <h2>ProductsListAPI</h2>
      {/* Nếu đang loading, hiển thị một thông báo */}
      {isLoading && <div>Đang tải...</div>}
      {/* Nếu có lỗi, hiển thị một thông báo */}
      {isError && <div>Error: {error.message}</div>}

      <div className="products_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
        {data?.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
            <div className="item" >
              <div className="thumb">
                <img width={200} height="auto" src={product.images[0]} alt="" />
              </div>
              <h3>
                {product.title} - CatID: {product.category.id}
              </h3>
              <div className="price">{product.price}</div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsListAPI;

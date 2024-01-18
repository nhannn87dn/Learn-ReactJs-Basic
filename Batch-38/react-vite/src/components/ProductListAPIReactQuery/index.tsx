import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AddProductReactQuery from "./AddProductReactQuery";

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const SingleProduct = ({
  product,
  onClick,
}: {
  product: IProduct;
  onClick: () => void;
}) => {
  return (
    <div className="item w-[200px]">
      <img
        width={200}
        height={200}
        src={product.images[0]}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <strong>{product.price}</strong>
      <button onClick={onClick} className="btn">
        Delete
      </button>
    </div>
  );
};

const ProductListAPIReactQuery = () => {
  // Access the client
  const queryClient = useQueryClient();
  /*
    Fetch data và return kết quả cuối cùng
    */
  const getProducts = async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    return result.data;
  };
  /**
   * 
   query = {data,isSuccess, isError, error, isLoading }
   data: chứa kết quả trả về
   */
  const query = useQuery<IProduct[], Error>({
    queryKey: ["products"], //key khong trung lap cua bo nho cache
    queryFn: getProducts,
  });

  const deleteProduct = async (productId: number) => {
    const result = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    return result.data;
  };

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch
      //cập nhật lại bộ nhớ cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //reset form
    },
    onError: (err) => {
      console.log("<<=== 🚀 err ===>>", err);
    },
  });

  const handleDeleteProductAxios = async (productId: number) => {
    mutation.mutate(productId);
  };

  return (
    <>
      <Header />
      <main className="my-10">
        <AddProductReactQuery />
        <h2>Product List React Query</h2>
        {/* {isLoading && <div>Loading.......</div>} */}
        <div className="flex gap-3 flex-wrap">
          {query.data &&
            query.data.length > 0 &&
            query.data.map((product) => {
              return (
                <SingleProduct
                  onClick={() => handleDeleteProductAxios(product.id)}
                  key={product.id}
                  product={product}
                />
              );
            })}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductListAPIReactQuery;

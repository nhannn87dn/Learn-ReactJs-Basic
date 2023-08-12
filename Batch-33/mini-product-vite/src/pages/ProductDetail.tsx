import React from 'react'
import {useParams} from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: object;
}


const ProductDetail = () => {
    const params = useParams();
    console.log(params);
    const id = params.id ? parseInt(params.id) : 0;

    const fetchProducts = (id:number) =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => res.json());
    
  // Sử dụng useQuery để fetch data từ API
  const { data, isLoading, isError, error } = useQuery<Product, Error>({
    queryKey: ["products", params.id],
    queryFn: ()=> fetchProducts(id),
  });

  console.log(data);

  return (
    <>
    <div className="container">
        <h1>ProductDetail + Biến ID: {params.id}</h1>
        {/* Nếu đang loading, hiển thị một thông báo */}
        {isLoading && <div>Đang tải...</div>}
        {/* Nếu có lỗi, hiển thị một thông báo */}
        {isError && <div>Error: {error.message}</div>}
        <h1>{data?.title}</h1>
        <div>Giá SP: {data?.price}</div>
    </div>
    </>
  )
}

export default ProductDetail
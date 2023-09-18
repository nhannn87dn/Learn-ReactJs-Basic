import React from 'react'
import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  title: string;
  price: number;
  category: {
    id: number
  }
}



const ProductListAPI = () => {

    // Sử dụng useQuery để fetch data từ API
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({ 
    queryKey: ['products',], 
    queryFn: () =>
  fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()) 
})

  // Nếu đang loading, hiển thị một thông báo
  //if (isLoading) return <div>Đang tải...</div>;

  // Nếu có lỗi, hiển thị một thông báo
//   if (isError) {
//     return <span>Error: {error.message}</span>
//   }


  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {isLoading && (<div>Đang tải...</div>)}
      {isError && (<span>Error: {error?.message}</span>)}
      <ul>
        {data && data.map((product: Product) => (
          <li key={product.id}>
            {product.title} - {product.price} - CID: {product.category.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductListAPI
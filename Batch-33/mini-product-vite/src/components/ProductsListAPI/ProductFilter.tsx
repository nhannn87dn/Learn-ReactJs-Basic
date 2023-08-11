import React from 'react'
import { 
  useMutation, 
  useQuery, 
  useQueryClient,
} from '@tanstack/react-query'

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: object;
}


const ProductFilter = () => {

  //const queryClient = useQueryClient()

  const fetchProductsByCategoryId = (categoryId:number) =>
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
    .then((response) => response.json())

  
  // Sử dụng useQuery để fetch data từ API
  const filterMutation = useQuery<Product[], Error>({
    queryKey: ["products", 5],
    queryFn: fetchProductsByCategoryId(5),
  });

  
  // Mutations
  // const filterMutation = useMutation({
  //   mutationFn: fetchProductsByCategoryId,
  //   onSuccess: (data,variables) => {
  //     console.log('filterMutation',data,variables);
  //     // Invalidate and refetch
  //     //queryClient.invalidateQueries({ queryKey: ['products'] })
  //     queryClient.setQueryData(['products', variables], data)
  //   },
  // });

  // const handleFetchProducts = (categoryId:number) => {
  //   filterMutation.mutate(categoryId);
  // }
  


  return (
    <div>
      <h2>ProductFilter</h2>
      {/* Nếu đang loading, hiển thị một thông báo */}
      {filterMutation.isLoading && <div>Đang tải...</div>}
        {/* Nếu có lỗi, hiển thị một thông báo */}
        {filterMutation.isError && <div>Error fetching data</div>}
      {/* <button onClick={() => handleFetchProducts(5)}>Fetch Products with Category ID 5</button> */}
    </div>
  )
}

export default ProductFilter
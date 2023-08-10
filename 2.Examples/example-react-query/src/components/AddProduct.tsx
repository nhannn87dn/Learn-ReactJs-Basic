import React from 'react';
import { 
    useMutation,  
    useQueryClient,
} from '@tanstack/react-query'


interface Product {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  }


function AddProduct() {
    
    const queryClient = useQueryClient()

    //hàm call API update sản phẩm
  const postProduct = (newProduct: Product) =>
    fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }).then((response) => response.json())

  // Mutations
  const addProductMutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Sau khi thêm mới thành công thì update lại danh sách sản phẩm dựa vào queryKey
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  //Handle thêm mới sản phẩm
  const handleAddProduct = () => {
    addProductMutation.mutate({
        title: 'New Product 3', 
        price: 480,
        description:'A description',
        categoryId: 1,
        images:["https://placeimg.com/640/480/any"]
    });
  };

  return (
    <div>
      <button disabled={addProductMutation.isLoading} onClick={handleAddProduct}>
      {addProductMutation.isLoading ? <span>Adding Product...</span> : <span>Add Product</span>}
    </button>
      
      {addProductMutation.isSuccess && <span>Product added successfully!</span>}
      {addProductMutation.isError && <span>Failed to add Product.</span>}
    </div>
  );
}

export default AddProduct
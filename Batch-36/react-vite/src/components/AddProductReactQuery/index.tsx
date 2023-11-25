import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

import { useForm } from "react-hook-form"

type FormData = {
  title: string
  price: number,
  description: string,
  categoryId: number,
  thumb: string
}

interface IProduct {
  title: string
  price: number,
  description: string,
  categoryId: number,
  images: string[]
}


const AddProductReactQuery = () => {
  // Access the client ==> truy cập đến kho cache
  const queryClient = useQueryClient();

  const postProduct = (newProduct: IProduct) =>
    fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }).then((response) => response.json())

  // Mutations -- DÙng cho POST, PUT, DELETE (thêm, sửa, xóa)
  /*
    HOặc bạn có thể Destructuring mutationProduct ra như sau:
    const {data, isPending, isSuccess, isError}
  */
  const mutationProduct = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      //Sau khi thêm mới xong --> làm mới lại cache
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    //Gọi một API với phương thức POST để thêm mới sp
     try {
     
      //Khi gọi với method POST, PUT, thì cần có payload
      const payload = {
        title: data.title,
        price: data.price,
        description: data.description,
        categoryId: data.categoryId,
        images: [data.thumb]
      }
      //Gọi hàm để fetch API
      const result = mutationProduct.mutate(payload);

      console.log('<<=== 🚀 result ===>>',result);

      reset({
        title: "",
        price: 0,
        description: "",
        categoryId: 0,
        thumb: ""
      })

     } catch (error) {
        console.log(error); 
     }
  })
  // firstName and lastName will have correct type

  return (
    <div>
      <form onSubmit={onSubmit}>
      <label>Product name</label>
      <input {...register("title")} />
      <label>Price</label>
      <input {...register("price")} />
      <label>Description</label>
      <input {...register("description")} />
      <label>Category Id</label>
      <input {...register("categoryId")} />
      <label>Thumb</label>
      <input {...register("thumb")} />
      <button
      className="btn btn-primary"
        type="submit"
      disabled={mutationProduct.isPending}
      >
       {mutationProduct.isPending ? 'Processing' : 'Add Product'} 
      </button>
    </form>
    </div>
  )
}

export default AddProductReactQuery
import axios from "axios"
import * as React from "react"
import { useForm } from "react-hook-form"

type FormData = {
  title: string
  price: number,
  description: string,
  categoryId: number,
  thumb: string
}


const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    //Gọi một API với phương thức POST để thêm mới sp
     try {
      const url = 'https://api.escuelajs.co/api/v1/products/';
      //Khi gọi với method POST, PUT, thì cần có payload
      const payload = {
        title: data.title,
        price: data.price,
        description: data.description,
        categoryId: data.categoryId,
        images: [data.thumb]
      }
      //Khi gọi với method POST, PUT, thì cần có Content-Type
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const result = await axios.post(url, payload, options);

      console.log(result);
      if(result.status === 201){
        console.log('Thêm mới thành công');
      }

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
      disabled={isSubmitting}
      >
       {isSubmitting ? 'Processing' : 'Add Product'} 
      </button>
    </form>
    </div>
  )
}

export default AddProduct
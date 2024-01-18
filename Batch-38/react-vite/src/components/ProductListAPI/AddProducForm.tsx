import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup.number().min(0).required(),
    description: yup.string().nullable(),
    categoryId: yup.number().required(),
    images: yup.string().required(),
  })
  .required();

export default function AddProductForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      //gọi API để thêm mới sp
      const url = "https://api.escuelajs.co/api/v1/products/";
      const options = {
        method: "POST", //DELETE, PUT, PATCH
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ ...data, images: [data.images] }),
      };
      const response = await fetch(url, options);
      const result = await response.json();

      console.log(result);
      if (result) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess && (
        <div className="bg-indigo-500 text-white p5">Thêm mới thành công</div>
      )}
      <input placeholder="title" {...register("title")} />
      <p>{errors.title?.message}</p>

      <input placeholder="price" {...register("price")} />
      <p>{errors.price?.message}</p>

      <input placeholder="description" {...register("description")} />
      <p>{errors.description?.message}</p>

      <input placeholder="categoryId" {...register("categoryId")} />
      <p>{errors.categoryId?.message}</p>

      <input placeholder="images" {...register("images")} />
      <p>{errors.images?.message}</p>

      <button disabled={isSubmitting} className="btn btn-primary" type="submit">
        {isSubmitting ? "Submiting....." : "Submit"}
      </button>
    </form>
  );
}

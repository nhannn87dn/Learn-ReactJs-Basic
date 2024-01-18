import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const schema = yup
  .object({
    title: yup.string().required(),
    price: yup.number().min(0).required(),
    description: yup.string().nullable(),
    categoryId: yup.number().required(),
    images: yup.string().required(),
  })
  .required();

export default function AddProductReactQuery() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  //Them, Sua, Xoa
  const createProduct = async (payload: IProduct) => {
    console.log("<<=== 🚀 payload ===>>", payload);
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/products/",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result.data;
  };
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate and refetch
      //cập nhật lại bộ nhớ cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //reset form
      reset();
    },
    onError: (err) => {
      console.log("<<=== 🚀 err ===>>", err);
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      //gọi API để thêm mới sp
      mutation.mutate({ ...data, images: [data.images] });
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

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
};

export default function CreateProductReactQuery() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  //Sử dụng reactr query để thêm sp
  const createProduct = async (payload: FormValues) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      payload
    );
    //bắt buộc phải return
    return response.data;
  };
  const queryCreateProduct = useMutation({
    mutationFn: createProduct,
    //làm gì đó khi thêm mới đã thành công
    onSuccess: () => {
      console.log("Thêm mới sp thành công !");
      //Làm tươi lại danh sách sản phẩm, cần truyền đúng key khi đặt cho danh sách
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["get-all-products"] });
    },
    // làm gì đó khi lỗi
    onError(error) {
      console.log(error);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Submitted data:", data);
    await queryCreateProduct.mutateAsync(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full border p-2 rounded"
            placeholder="Enter product title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required", min: 0 })}
            className="w-full border p-2 rounded"
            placeholder="Enter price"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border p-2 rounded"
            placeholder="Enter description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category ID */}
        <div>
          <label className="block font-medium mb-1">Category ID</label>
          <input
            type="number"
            {...register("categoryId", {
              required: "Category ID is required",
              min: 1,
            })}
            className="w-full border p-2 rounded"
            placeholder="Enter category ID"
          />
          {errors.categoryId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        {/* Image URLs */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            {...register("images.0", {
              required: "Image URL is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Enter a valid URL",
              },
            })}
            className="w-full border p-2 rounded"
            placeholder="https://placehold.co/600x400"
          />
          {errors.images?.[0] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.images[0].message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

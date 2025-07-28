import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface IProduct {
  id: number;
  product_name: string;
  price: number;
  discount: number;
  category_id: number;
  brand_id: number;
  description: string;
  model_year: number;
  stock: number;
  thumbnail: string;
  slug: string;
}

const schema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: yup.string().required("Description is required"),
  image: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function UpdateFormProductrReactQuery({
  product,
  onUpdateSuccess,
}: {
  product: IProduct | null;
  onUpdateSuccess: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: product?.product_name,
      price: product?.price,
      description: product?.description,
      image: product?.thumbnail,
    },
  });

  //EDIT BY REACT QUERY
  const queryClient = useQueryClient();
  const updateProduct = async ({
    id,
    payload,
  }: {
    id: number;
    payload: {
      product_name: string;
      price: number;
      thumbnail: string;
      //bổ sung thêm
    };
  }) => {
    const response = await axios.put(
      `http://localhost:9000/api/v1/products/${id}`,
      payload
    );
    return response.data;
  };
  const mutationUpdateProduct = useMutation({
    mutationFn: updateProduct, // hàm API để xóa
    onSuccess: () => {
      //ẩn modal
      onUpdateSuccess();

      //làm tươi lại danh sách dựa vào key
      queryClient.invalidateQueries({ queryKey: ["products"] });

      //làm gì đó khi xóa thành công
      alert("Cập nhật sản phẩm thành công");
    },
    onError: () => {
      // làm gì đó khi xóa thất bại
      alert("Cập nhật sp thất bại");
    },
  });

  const onSubmit = async (data: FormData) => {
    if (product && product.id) {
      mutationUpdateProduct.mutate({
        id: product?.id,
        payload: {
          product_name: data.title,
          price: data.price,
          thumbnail: data.image,
        },
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            {...register("title")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            {...register("image")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutationUpdateProduct.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {mutationUpdateProduct.isPending ? "Submitting..." : "Update Product"}
        </button>

        {mutationUpdateProduct.isSuccess && (
          <p className="text-green-600 mt-2">Product updated successfully!</p>
        )}
      </form>
    </div>
  );
}

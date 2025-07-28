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
  product_name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  discount: yup
    .number()
    .typeError("Discount must be a number")
    .min(0, "Discount must be at least 0")
    .required("Discount is required"),
  category_id: yup
    .number()
    .typeError("Category ID must be a number")
    .positive("Category ID must be positive")
    .integer("Category ID must be an integer")
    .required("Category ID is required"),
  brand_id: yup
    .number()
    .typeError("Brand ID must be a number")
    .positive("Brand ID must be positive")
    .integer("Brand ID must be an integer")
    .required("Brand ID is required"),
  description: yup.string().required("Description is required"),
  model_year: yup
    .number()
    .typeError("Model year must be a number")
    .min(1900, "Model year must be at least 1900")
    .integer("Model year must be an integer")
    .required("Model year is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .min(0, "Stock must be at least 0")
    .integer("Stock must be an integer")
    .required("Stock is required"),
  thumbnail: yup
    .string()
    .url("Must be a valid URL")
    .required("Thumbnail URL is required"),
  slug: yup.string().required("Slug is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function CreateProductReactQuery() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  //CREATE PRODUCT WITH REACT QUERY
  const queryClient = useQueryClient();
  const createProduct = async ({
    payload,
  }: {
    payload: Omit<IProduct, "id">;
  }) => {
    const response = await axios.post(
      `http://localhost:9000/api/v1/products`,
      payload
    );
    console.log("<<=== 🚀 response ===>>", response);
    return response.data;
  };
  const mutationCreateProduct = useMutation({
    mutationFn: createProduct, // hàm API để xóa
    onSuccess: (data: IProduct) => {
      //ẩn modal
      reset();

      //làm tươi lại danh sách dựa vào key
      queryClient.invalidateQueries({ queryKey: ["products"] });

      //làm gì đó khi xóa thành công
      alert("Thêm mới sản phẩm thành công" + data.id);
    },
    onError: () => {
      // làm gì đó khi xóa thất bại
      alert("Thêm mới sp thất bại");
    },
  });

  const onSubmit = async (data: FormData) => {
    mutationCreateProduct.mutate({
      payload: data,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            {...register("product_name")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.product_name && (
            <p className="text-red-500 text-sm">
              {errors.product_name.message}
            </p>
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

        {/* Discount */}
        <div>
          <label className="block mb-1 font-medium">Discount</label>
          <input
            type="number"
            step="0.01"
            {...register("discount")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.discount && (
            <p className="text-red-500 text-sm">{errors.discount.message}</p>
          )}
        </div>

        {/* Category ID */}
        <div>
          <label className="block mb-1 font-medium">Category ID</label>
          <input
            type="number"
            {...register("category_id")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.category_id && (
            <p className="text-red-500 text-sm">{errors.category_id.message}</p>
          )}
        </div>

        {/* Brand ID */}
        <div>
          <label className="block mb-1 font-medium">Brand ID</label>
          <input
            type="number"
            {...register("brand_id")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.brand_id && (
            <p className="text-red-500 text-sm">{errors.brand_id.message}</p>
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

        {/* Model Year */}
        <div>
          <label className="block mb-1 font-medium">Model Year</label>
          <input
            type="number"
            {...register("model_year")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.model_year && (
            <p className="text-red-500 text-sm">{errors.model_year.message}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            {...register("stock")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.stock && (
            <p className="text-red-500 text-sm">{errors.stock.message}</p>
          )}
        </div>

        {/* Thumbnail URL */}
        <div>
          <label className="block mb-1 font-medium">Thumbnail URL</label>
          <input
            type="url"
            {...register("thumbnail")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.thumbnail && (
            <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>
          )}
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-1 font-medium">Slug</label>
          <input
            type="text"
            {...register("slug")}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.slug && (
            <p className="text-red-500 text-sm">{errors.slug.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutationCreateProduct.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {mutationCreateProduct.isPending ? "Submitting..." : "Create Product"}
        </button>

        {mutationCreateProduct.isSuccess && (
          <p className="text-green-600 mt-2">Product created successfully!</p>
        )}
      </form>
    </div>
  );
}

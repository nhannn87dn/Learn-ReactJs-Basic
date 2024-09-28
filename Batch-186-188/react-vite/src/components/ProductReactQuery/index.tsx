import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required("Tên sản phẩm không thể để trống"),
    description: yup.string().required("description không thể để trống"),
    price: yup
      .string()
      .matches(/[0-9]+/, "Phải là số")
      .min(0, "Giá phải lớn hơn 0")
      .required("Yêu cầu điền giá"),
  })
  .required();

type TProduct = {
  id: number;
  title: string;
  price: number;
};

type TMessage = {
  type: "error" | "success" | "warning" | "info";
  content: string | null;
};

const ProductReactQuery = () => {
  const [message, setMessage] = React.useState<TMessage>({
    type: "info",
    content: null,
  });

  /* === GET PRODUCTS ====*/
  const getProducts = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    console.log("<<=== 🚀 response ===>>", response);
    //hàm này bắt buộc phải có return
    return response.data;
  };
  const queryProduct = useQuery<TProduct[], Error>({
    queryKey: ["products"], //Đặt tên cho bộ nhớ đệm cache
    queryFn: getProducts, //là cái hàm để gọi api
  });

  /* === DELETE PRODUCT ====*/
  const queryClient = useQueryClient();

  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    /* bắt buộc phải return */
    return response.data;
  };
  const mutationDeleteProduct = useMutation({
    mutationFn: deleteProduct, // hàm gọi API xóa sp
    /* sự kiện sẽ được gọi khi mà bạn xóa thành công */
    onSuccess: () => {
      console.log("Xóa thành công !");
      setMessage({
        ...message,
        type: "success",
        content: "Xóa sản phẩm thành công",
      });
      // làm tươi bộ nhớ cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    /* Hàm được gọi khi gọi api thất bại */
    onError: (error) => {
      console.log("<<=== 🚀 error ===>>", error);
    },
  });

  let classMessage = "bg-sky-100 text-sky-800 py-1 px-4";
  if (message.type == "success") {
    classMessage = "bg-green-100 text-green-800 py-1 px-4";
  } else if (message.type == "error") {
    classMessage = "bg-red-100 text-red-800 py-1 px-4";
  } else {
    classMessage = "bg-orange-100 text-orange-800 py-1 px-4";
  }

  /* === THÊM SẢN PHẨM === */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createProduct = async (body: {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  }) => {
    const payloads = {
      ...body,
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    };
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      payloads
    );
    return response.data;
  };

  const mutationCreateProduct = useMutation({
    mutationFn: createProduct, // hàm gọi API xóa sp
    /* sự kiện sẽ được gọi khi mà bạn xóa thành công */
    onSuccess: () => {
      console.log("Thêm thành công !");
      setMessage({
        ...message,
        type: "success",
        content: "Thêm sản phẩm thành công",
      });
      // làm tươi bộ nhớ cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //
      reset(); // reset form
    },
    /* Hàm được gọi khi gọi api thất bại */
    onError: (error) => {
      console.log("<<=== 🚀 error ===>>", error);
      setMessage({
        ...message,
        type: "error",
        content: "Thêm sản phẩm lỗi",
      });
    },
  });

  const onSubmit = async (data: {
    title: string;
    price: string;
    description: string;
  }) => {
    console.log(data);
    //Gọi API thông qua React Query
    mutationCreateProduct.mutate(data);
  };

  return (
    <div>
      <h2>ADd Product Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("title")} />
        <p>{errors.title?.message}</p>

        <input placeholder="Price" {...register("price")} />
        <p>{errors.price?.message}</p>

        <input placeholder="Description" {...register("description")} />
        <p>{errors.description?.message}</p>

        <input type="submit" />
      </form>
      <h1>Product List</h1>
      {message.content ? (
        <div className={classMessage}>{message.content}</div>
      ) : null}
      {queryProduct.isLoading ? (
        <div className="product_list flex gap-[10px]">
          <div className="item w-[285px]">
            <Skeleton className="w-full h-[160px]" />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="item w-[285px]">
            <Skeleton className="w-full h-[160px]" />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="item w-[285px]">
            <Skeleton className="w-full h-[160px]" />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="item w-[285px]">
            <Skeleton className="w-full h-[160px]" />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      ) : (
        <table>
          {queryProduct.data &&
            queryProduct.data.length > 0 &&
            queryProduct.data.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      disabled={
                        mutationDeleteProduct.isPending &&
                        mutationDeleteProduct.variables == product.id
                          ? true
                          : false
                      }
                      onClick={() => {
                        console.log(product.id);
                        mutationDeleteProduct.mutate(product.id);
                      }}
                      className="btn btn-danger"
                    >
                      {mutationDeleteProduct.isPending &&
                      mutationDeleteProduct.variables == product.id
                        ? "Đang xóa..."
                        : "Xóa"}
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default ProductReactQuery;

import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type TProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

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

type TMessage = {
  type: "error" | "success" | "warning" | "info";
  content: string | null;
};

const ProductCURDAxios = () => {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFresh, setIsFresh] = React.useState(0);
  console.log("<<=== 🚀 isFresh ===>>", isFresh);
  const [message, setMessage] = React.useState<TMessage>({
    type: "info",
    content: null,
  });
  console.log("product render");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: {
    title: string;
    price: string;
    description: string;
  }) => {
    console.log(data);
    //gọi API thêm mới product
    const url = "https://api.escuelajs.co/api/v1/products";
    //PUT, DELETE giống với post
    const response = await axios.post(url, {
      title: data.title,
      price: data.price,
      description: data.description,
      categoryId: 1, //code cứng
      images: ["https://placeimg.com/640/480/any"], //code cứng
    });
    console.log("<<=== 🚀 response ===>>", response);
    if (response.status === 201) {
      setMessage({
        ...message,
        type: "success",
        content: "Thêm sản phẩm thành công !",
      });
    }
  };

  //Cần useEffect để gọi API đổ dữ liệu vào cho state Products
  React.useEffect(() => {
    //Viết một cái hàm bất đồng bộ
    const fetchData = async () => {
      //Bật cho cái loading xoay ....
      setIsLoading(true);
      const url = "https://api.escuelajs.co/api/v1/products";
      const response = await axios.get(url);
      console.log("<<=== 🚀 response ===>>", response);
      if (response && response.status === 200) {
        //Cập nhật lại giá trị cho state product,
        //khi chắc chắn response thành công với mã 200
        setProducts(response.data); //
        setIsLoading(false);
      }
    };
    //gọi hàm để call API
    fetchData();
  }, [isFresh]); //Dependency là mảng rỗng khi gọi API

  console.log("<<=== 🚀 products ===>>", products);

  //API Xóa sản phẩm

  const onHandleDeleteProduct = async (id: number) => {
    //gọi API xóa sp có ID trên
    const url = `https://api.escuelajs.co/api/v1/products/${id}`; //ID cần xóa
    const response = await axios.delete(url);
    console.log("<<=== 🚀 response ===>>", response);
    //Tạo một thông báo khi xóa thành công.
    if (response.status === 200) {
      const newData = new Date();
      setIsFresh(newData.getTime()); //gán một giá trị ngẩu nhiên
      setMessage({
        ...message,
        type: "success",
        content: "Xóa sản phẩm thành công !",
      });
    }
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
      <h2>ProductCURDAxios</h2>
      {message.content ? (
        <div className="bg-green-100 text-green-800 py-1 px-4">
          {message.content}
        </div>
      ) : null}
      {isLoading ? (
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
          {products.length > 0 &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        onHandleDeleteProduct(product.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
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

export default ProductCURDAxios;

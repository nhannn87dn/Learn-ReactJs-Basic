import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type TProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const schema = yup
  .object({
    title: yup.string().required("Tên sản phẩm không thể để trống"),
    price: yup
      .string()
      .matches(/[0-9]+/, "Phải là số")
      .min(0, "Giá phải lớn hơn 0")
      .required("Yêu cầu điền giá"),
  })
  .required();

const ProductCURDAxios = () => {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  console.log("product render");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: { title: string; price: number }) => {
    console.log(data);
    //gọi API thêm mới product
    const url = "https://dummyjson.com/products/add";
    //PUT, DELETE giống với post
    const response = await axios.post(url, {
      title: data.title,
      price: data.price,
    });
    console.log("<<=== 🚀 response ===>>", response);
  };

  //Cần useEffect để gọi API đổ dữ liệu vào cho state Products
  React.useEffect(() => {
    //Viết một cái hàm bất đồng bộ
    const fetchData = async () => {
      const url = "https://dummyjson.com/products";
      const response = await axios.get(url);
      console.log("<<=== 🚀 response ===>>", response);
      if (response && response.status === 200) {
        //Cập nhật lại giá trị cho state product,
        //khi chắc chắn response thành công với mã 200
        setProducts(response.data.products); //
      }
    };
    //gọi hàm để call API
    fetchData();
  }, []); //Dependency là mảng rỗng khi gọi API

  console.log("<<=== 🚀 products ===>>", products);
  return (
    <div>
      <h2>ADd Product Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("title")} />
        <p>{errors.title?.message}</p>

        <input placeholder="Price" {...register("price")} />
        <p>{errors.price?.message}</p>

        <input type="submit" />
      </form>
      <h2>ProductCURDAxios</h2>
      <table>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default ProductCURDAxios;

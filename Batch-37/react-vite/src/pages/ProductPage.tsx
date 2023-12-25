import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string;
};

interface IProduct {
  id: number;
  title: string;
  price: number;
}

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //Fetch API để lấy DATA
  useEffect(() => {
    //Code bên trong nó chạy  1 lần duy nhất khi component render lần đầu
    const fetchData = async () => {
      //Set trạng thái Loading = true
      setIsLoading(true);
      //Sử dụng async trước arrow function
      // await trước một Promise để đợi kết quả
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      //kết quả từ API trả về
      console.log(response);
      //Có data rồi thì tắt loading
      setIsLoading(false);
      //Cập nhật lại state products
      setProducts(response.data);
    };
    fetchData();
  }, []); //dependencies là mảng rỗng []

  //ReactHook
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //data lấy được từ form
    console.log(data);
    //gọi API với method POST để tạo mới product
    const urlAPI = "https://api.escuelajs.co/api/v1/products/";

    const payload = {
      title: data.title,
      price: data.price,
      description: data.description,
      categoryId: data.categoryId,
      images: [data.images],
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        //Nếu có Authorization thì làm như bên dưới
        //'Authorization': "Bearer {your access token}"
      },
    };

    await axios
      .post(urlAPI, payload, options)
      //Nếu mà gọi API thành công thì rơi vào then
      .then(function (response) {
        console.log("Submit", response);
        //reset lại form, đưa các input về trạng trống
        reset();
      })
      //Nếu thấy bại rời vào catch
      .catch(function (error) {
        console.log("Submit", error);
      });
  };
  return (
    <div>
      <h1>ProductPage</h1>
      <h2 className="font-bold border-b border-slate-700">
        Thêm một sản phẩm mới
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="title" {...register("title", { required: true })} />
        {errors.title && <span>{errors.title.message}</span>}
        <input placeholder="price" {...register("price", { required: true })} />
        {errors.price && <span>{errors.price.message}</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="description"
          {...register("description", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.description && <span>{errors.description.message}</span>}

        <input
          placeholder="categoryId"
          {...register("categoryId", { required: true })}
        />
        {errors.categoryId && <span>{errors.categoryId.message}</span>}

        <input
          placeholder="images"
          {...register("images", { required: true })}
        />
        {errors.images && <span>{errors.images.message}</span>}

        <button
          disabled={isSubmitting}
          className="btn btn_primary"
          type="submit"
        >
          {isSubmitting ? "Đang Submit....." : "Create new a product"}
        </button>
      </form>

      <h2 className="font-bold border-b border-slate-700">
        Danh sách sản phẩm
      </h2>
      {isLoading && <p>Loading........</p>}
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title} - Price: {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductPage;

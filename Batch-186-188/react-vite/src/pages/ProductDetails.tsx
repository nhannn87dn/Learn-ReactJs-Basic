import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  //Ham goij API
  const fetchProductDetails = async () => {
    const url = `https://api.escuelajs.co/api/v1/products/${params.id}`;
    const response = await axios.get(url);
    return response.data;
  };
  //Doi ten bien data thanh product
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<TProduct, Error>({
    queryKey: ["products", params.id], // cache dong theo query string
    queryFn: fetchProductDetails,
  });

  //Nếu có lỗi khi gọi API
  if (isError) {
    return (
      <div className="container mx-auto">
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1>ProductDetails</h1>
      <div className="flex gap-x-5">
        <div className="gallery w-[400px] h-[400px] bg-slate-300"></div>
        <div className="product_details flex-1">
          <h1>{product?.title}</h1>
          <strong>Price: {product?.price}</strong>
          <p>{product?.description}</p>
          <button className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

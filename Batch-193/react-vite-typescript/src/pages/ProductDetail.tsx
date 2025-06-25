import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import { useShoppingCartStore } from "../stores/shoppingCartStore";
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const ProductDetail = () => {
  //lấy phương thức thêm vào giỏ hàngh
  const addToCart = useShoppingCartStore((state) => state.addItemToCart);

  const params = useParams();
  const id = params.id ?? "0";
  //gọi api để lấy thông tin sp có id đó
  const getProductById = async (id: string) => {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  };
  const { data, isLoading, isError, error } = useQuery<IProduct, Error>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isError) {
    return <p>Có lỗi xả ra: {error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto">
      <h1>ProductDetail</h1>
      {data ? <img width={200} src={data.images[0]} /> : ""}
      <h2>{data?.title}</h2>
      <p>{data?.price}</p>
      <p>{data?.description}</p>
      <button
        onClick={() => {
          addToCart({
            id: data?.id || 1,
            name: data?.title || "",
            price: data?.price || 0,
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetail;

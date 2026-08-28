import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type TProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<TProduct | null>(null);
  //Gọi API lấy thông tin sp có id = 1
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log("<<=== 🚀 error ===>>", error);
      }
    };
    fetchProduct();
  }, []);

  console.log("<<=== 🚀 product ===>>", product);
  return (
    <div className="container">
      <meta charSet="utf-8" />
      <title>{product?.title}</title>

      <h1>ProductDetail {id}</h1>
      <h2>{product?.title}</h2>
      <div>
        <strong>{product?.price}</strong>
      </div>
      <img src={product?.thumbnail} alt={product?.title} />
    </div>
  );
};

export default ProductDetail;

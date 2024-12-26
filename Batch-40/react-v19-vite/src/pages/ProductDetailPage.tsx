import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductDetailPage() {
  //   const params = useParams();
  //   const slug = params.slug;
  const { slug } = useParams();
  console.log("<<=== 🚀 slug ===>>", slug);

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${slug}`
        );
        if (response.status == 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log("<<=== 🚀 error ===>>", error);
      }
    };
    fetchSingleProduct();
  }, [slug]); // Khi slug thay đổi thì mới gọi API

  return (
    <div>
      <h1>ProductDetailPage - {slug}</h1>
      <h2>{product?.title}</h2>
      <img
        height={300}
        width={300}
        src={product?.images[0]}
        alt={product?.title}
      />
      <div>
        <strong>{product?.price}</strong>
      </div>
    </div>
  );
}

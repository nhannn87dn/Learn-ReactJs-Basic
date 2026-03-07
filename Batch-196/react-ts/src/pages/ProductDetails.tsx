import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

interface IProduct {
  title: string;
  id: number;
  slug: string;
  price: string;
  images: string[];
}

const getProductDetail = async (slug: string) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/slug/${slug}`,
  );
  return response.data;
};

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug || "";

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IProduct>({
    queryKey: ["product", slug],
    queryFn: () => getProductDetail(slug),
  });

  return (
    <main>
      <h1>ProductDetails</h1>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className="border p-4 mb-4">
          <h1>{product?.title}</h1>
          <img
            height="300"
            width="300"
            src={product?.images[0]}
            alt={product?.title}
          />
          <strong>{product?.price}</strong>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

const getProductById = async (id: string | undefined) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  return response.data;
};

const ProductDetail = () => {
  //Lấy ID từ url xuống để gọi API
  const params = useParams();

  console.log("<<=== 🚀 params ===>>", params);
  const { id } = params;

  const queryProduct = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  console.log("<<=== 🚀 queryProduct.data ===>>", queryProduct.data);

  return (
    <main className="container mx-auto">
      <div className="product-layout flex gap-x-20 mt-8">
        <div className="gallery w-1/3">
          <img
            src={queryProduct.data?.images[0]}
            alt={queryProduct.data?.title}
          />
        </div>
        <div className="product-infos w-2/3">
          <h1 className="font-bold text-2xl">{queryProduct.data?.title}</h1>
          <p className="price text-red-600 text-2xl font-bold">
            ${queryProduct.data?.price}
          </p>
          <div className="description mt-4">
            {queryProduct.data?.description}
          </div>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;

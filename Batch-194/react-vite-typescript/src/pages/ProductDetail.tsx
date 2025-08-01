import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import type { IProduct } from "../types/product.type";
import { getProduct } from "../services/product.service";
const ProductDetail = () => {
  const params = useParams();
  console.log("<<=== 🚀 params ===>>", params);
  const { id = "0" } = params;

  const queryProduct = useQuery<IProduct, Error>({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });

  console.log("<<=== 🚀 queryProduct.data ===>>", queryProduct.data);

  return (
    <main className="container mx-auto flex gap-x-5">
      <div className="p">
        <img
          className="w-full h-auto object-cover"
          src={queryProduct.data?.thumbnail}
          alt=""
        />
      </div>
      <div className="product-info">
        <h1>{queryProduct.data?.title}</h1>
        <div className="price">
          <strong className="text-red-500">{queryProduct.data?.price}</strong>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;

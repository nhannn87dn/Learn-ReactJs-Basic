import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";

type TProduct = {
  id: number;
  slug: string;
  title: string;
  price: number;
  images: string[];
};

const getProduct = async (slug: string): Promise<TProduct> => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/slug/${slug}`,
  );

  return response.data;
};

const ProductDetailPage = () => {
  const params = useParams();
  console.log(params);
  const slug = params.slug ? params.slug : "";

  const queryProducts = useQuery({
    queryKey: ["products", slug],
    queryFn: () => getProduct(slug),
  });

  if (queryProducts.isLoading) {
    return (
      <div className="flex justify-center py-20">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (queryProducts.isError) {
    return (
      <div className="flex justify-center py-20">
        <p>Có lỗi xảy ra.</p>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{queryProducts.data?.title}</title>
      </Helmet>
      <h1>{queryProducts.data?.title}</h1>
      <div className="">
        <strong>{queryProducts.data?.price}</strong>
      </div>
    </div>
  );
};

export default ProductDetailPage;

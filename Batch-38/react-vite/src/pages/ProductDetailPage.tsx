import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

const LoadingProduct = () => {
  return (
    <div className="flex gap-x-10 my-20">
      <div className="photo w-[200px]">
        <Skeleton height={200} width={200} />
      </div>
      <div className="product_info flex-1">
        <Skeleton count={3} />
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("<<=== 🚀 params ===>>", params);

  const id = params.id ? parseInt(params.id) : 0;
  //TODO: handle việc truyền id = 0;

  useEffect(() => {
    if (id === 0) {
      navigate("/products"); //chuyển hướng sang trang /products
    }
  }, [id]);
  /*
    Fetch data và return kết quả cuối cùng
    */
  const getProducts = async (id: number) => {
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return result.data;
  };
  /**
   * 
   query = {data,isSuccess, isError, error, isLoading }
   data: chứa kết quả trả về
   */
  const { data: product, isLoading } = useQuery<IProduct, Error>({
    queryKey: ["products-detail", id], //key khong trung lap cua bo nho cache
    queryFn: () => getProducts(id),
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ? (
        <LoadingProduct />
      ) : (
        <div className="flex gap-x-10 my-20">
          <div className="photo w-[200px]">
            <img src={product?.images[0]} alt="" />
          </div>
          <div className="product_info flex-1">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <strong className="text-orange-500">${product?.price}</strong>
            <p>{product?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

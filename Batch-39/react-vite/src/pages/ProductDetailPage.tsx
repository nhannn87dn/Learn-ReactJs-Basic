import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailPage = () => {
  const params = useParams();
  console.log(params);
  const id = params.id;

  //b1. Tao ham de goi lay chi tiet
  const getDetailProduct = async () => {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  };
  //b2 su dung usequery doi goi
  const { data, isError, isSuccess, error, isLoading } = useQuery({
    queryKey: ["products-detail", id],
    queryFn: getDetailProduct,
  });

  return (
    <div>
      {isError && error ? <p>{error.message}</p> : null}
      {isLoading ? (
        <>
          <div className="flex">
            <div className="photo w-[400px] h-[400px]">
              <Skeleton width={400} height={400} />
            </div>
            <div className="content flex-1">
              <Skeleton />
              <div>
                <Skeleton />
              </div>
              <Skeleton width={100} height={40} />
            </div>
          </div>
        </>
      ) : (
        <>
          {isSuccess && (
            <div className="flex">
              <div className="photo w-[400px] bg-slate-100">
                <img height={400} width={400} src={data.images[0]} alt="" />
              </div>
              <div className="content flex-1">
                <h2>{data.title}</h2>
                <div>
                  <strong>Price: {data.price}</strong>
                </div>
                <button>Mua ngay</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;

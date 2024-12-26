import { Link, useSearchParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const limit = 10; //Số sản phẩm hiển thị trên 1 trang
  const offset = (parseInt(page as string) - 1) * limit;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); //Bắt đầu xoay loading...
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
        );
        if (response.status == 200) {
          setProducts(response.data);
          setLoading(false); //Tắt loading khi gọi API thành công
        }
      } catch (error) {
        //Khi gọi API có lỗi thì nó rơi vào catch
        console.log("<<=== 🚀 error ===>>", error);
        setLoading(false); //Tắt loading khi gọi API thất bại
      }
    };
    fetchProducts();
  }, [limit, offset]); //Chỉ gọi API khi limit hoặc offset thay đổi

  console.log("<<=== 🚀 products ===>>", products);
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product Page Content</p>
      {loading ? (
        <div className="product-list flex flex-wrap gap-4">
          <div className="product-item w-[220px] flex flex-col gap-y-2">
            <Skeleton height={200} width={220} />
            <Skeleton height={10} width={220} />
            <Skeleton height={10} width={100} />
          </div>
          <div className="product-item w-[220px] flex flex-col gap-y-2">
            <Skeleton height={200} width={220} />
            <Skeleton height={10} width={220} />
            <Skeleton height={10} width={100} />
          </div>
          <div className="product-item w-[220px] flex flex-col gap-y-2">
            <Skeleton height={200} width={220} />
            <Skeleton height={10} width={220} />
            <Skeleton height={10} width={100} />
          </div>
          <div className="product-item w-[220px] flex flex-col gap-y-2">
            <Skeleton height={200} width={220} />
            <Skeleton height={10} width={220} />
            <Skeleton height={10} width={100} />
          </div>
        </div>
      ) : (
        <div>
          <div className="product-list flex flex-wrap gap-4">
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <div className="product-item w-[220px]" key={product.id}>
                    <img src={product.images[0]} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </div>
                );
              })}
          </div>
          <div className="pagination flex my-5 gap-x-2">
            <Link
              className="border border-blue-500 py-1 px-2 rounded"
              to="/product?page=1"
            >
              1
            </Link>
            <Link
              className="border border-blue-500 py-1 px-2 rounded"
              to="/product?page=2"
            >
              2
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

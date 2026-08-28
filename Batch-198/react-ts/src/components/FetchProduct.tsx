import { useEffect, useState } from "react";
import styles from "./FetchProduct.module.css";
import { Link, useSearchParams } from "react-router";
//bước 1: Tạo một kiểu dữ liệu cho sản phẩm
type TProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const FetchProduct = () => {
  // Bước 2: Sử dụng useState để lưu trữ dữ liệu sản phẩm
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Phân trang
  const [params] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  console.log("<<=== 🚀 page ===>>", page);

  //3. Sử dụng useEffect để gọi API khi component được render lần đầu tiên
  useEffect(() => {
    //4. Gọi API để lấy dữ liệu sản phẩm
    //Tạo một hàm async để gọi API
    const fetchProduct = async () => {
      try {
        //bắt đầu gọi thì set isLoading = true
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        );
        const data = await response.json(); //covert json to object
        console.log("<<=== 🚀 response ===>>", response);
        console.log("<<=== 🚀 data ===>>", data);
        //Bước 5:Sau khi lấy được dữ liệu thì đi cập nhật cho state product
        if (response.status === 200) {
          setProducts(data.products);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        //kết thúc gọi thì set isLoading = false
        setIsLoading(false);
      }
    };
    //Gọi hàm fetchProduct để lấy dữ liệu sản phẩm
    fetchProduct();
  }, [page, limit]); //Nếu tham số thứ 2 là một mảng rổng, thì callback chỉ chạy 1 lần
  // Gọi lại API khi số trang (page, limit) thay đổi

  console.log("<<=== 🚀 products ===>>", products);

  if (isError) {
    return <div className={styles.error}>Lỗi về lấy dữ liệu</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Đang tải dữ liệu...</div>;
  }
  return (
    <div>
      <div className={styles.products_list}>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className={styles.product_item}
              >
                <div className={styles.thumbnail}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className={styles.product_info}>
                  <h3 className={styles.product_name}>{product.title}</h3>
                  <div className={styles.product_price}>
                    <strong>${product.price}</strong>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="pagination">
        <Link to="?page=1">1</Link>
        <Link to="?page=2">2</Link>
        <Link to="?page=3">3</Link>
      </div>
    </div>
  );
};

export default FetchProduct;

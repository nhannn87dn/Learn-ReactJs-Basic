import { useEffect, useState } from "react";
import styles from "./FetchProduct.module.css";
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
  //3. Sử dụng useEffect để gọi API khi component được render lần đầu tiên
  useEffect(() => {
    //4. Gọi API để lấy dữ liệu sản phẩm
    //Tạo một hàm async để gọi API
    const fetchProduct = async () => {
      try {
        //bắt đầu gọi thì set isLoading = true
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json(); //covert json to object
        console.log("<<=== 🚀 response ===>>", response);
        console.log("<<=== 🚀 data ===>>", data.products);
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
  }, []); //Nếu tham số thứ 2 là một mảng rổng, thì callback chỉ chạy 1 lần

  console.log("<<=== 🚀 products ===>>", products);

  if (isError) {
    return <div className={styles.error}>Lỗi về lấy dữ liệu</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Đang tải dữ liệu...</div>;
  }
  return (
    <div className={styles.products_list}>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div key="{products.id}" className={styles.product_item}>
              <div className={styles.thumbnail}>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className={styles.product_info}>
                <h3 className={styles.product_name}>{product.title}</h3>
                <div className={styles.product_price}>
                  <strong>${product.price}</strong>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FetchProduct;

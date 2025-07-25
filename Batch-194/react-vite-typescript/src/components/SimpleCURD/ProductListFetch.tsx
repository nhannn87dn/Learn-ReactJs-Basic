import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonDeleteProduct from "./ButtonDeleteProduct";
import Modal from "../Modal";
import UpdateFormProductFetch from "./UpdateFormProductFetch";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductListFetch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); //chờ dữ liệu
  const [error, setError] = useState<null | string>(null);

  //State cho SP đang edit
  const [selected, setSelected] = useState<Product | null>(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("<<=== 🚀 data ===>>", data);
  //       setProducts(data);
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //gọi API để lấy dữ liệu sản phẩm
        setLoading(true); //đặt loading là true khi bắt đầu fetch
        //fetch dữ liệu từ API
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("<<=== 🚀 data ===>>", data);
        //chắc chắn response.status là 200
        if (response.status === 200) {
          setProducts(data);
        }
      } catch (error) {
        console.log("<<=== 🚀 error ===>>", error);
        setError("Lỗi xảy ra khi lấy dữ liệu");
      } finally {
        //Dù thành công hay thất bại thì nó cũng thực thi khối lệnh trong finally
        setLoading(false);
      }
    };
    //gọi hàm fetchProducts
    fetchProducts();
  }, []);

  console.log("<<=== 🚀 selected ===>>", selected);

  return (
    <div>
      <h2 className="font-bold text-2xl">ProductListFetch</h2>
      {error && <div className="p-3 text-red-500">{error}</div>}
      {loading ? (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="product-item">
              <Skeleton className="w-full h-48 mb-2" />
              <Skeleton className="w-full" />
              <Skeleton className="w-1/2" />
              <Skeleton className="w-1/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <div key={product.id} className="product-item">
                  <div className="thumb w-full h-48 mb-2 overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="font-semibold line-clamp-2 min-h-[48px]">
                    {product.title}
                  </h3>
                  <p className="text-red-600">${product.price}</p>
                  <div className="flex justify-center gap-x-2">
                    <ButtonDeleteProduct id={product.id} />
                    <button
                      onClick={() => {
                        console.log(product.id);
                        setSelected(product);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {/* MODAL EDIT */}
      {selected !== null && (
        <Modal
          isOpen={selected !== null}
          onClose={() => {
            setSelected(null);
          }}
          title="Edit Product"
        >
          <UpdateFormProductFetch product={selected} />
        </Modal>
      )}
    </div>
  );
};

export default ProductListFetch;

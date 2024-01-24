import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
//Lấy các action từ Slice vào
import { fetchProducts, selectProducts } from "./productSlice";

export function Products() {
  //Sử dụng các hooks định nghĩa bên store để truy vập vào Store chung
  const { products, status, error } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); //Fetch đổ product vào state products
  }, [dispatch]);

  return (
    <div>
      <h2>Products Slice</h2>
      <div>
        {error && <p>{error}</p>}
        {status === "loading" ? (
          <div>Loading...</div>
        ) : (
          <>
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <div>
                    {product.title} - {product.price}
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}

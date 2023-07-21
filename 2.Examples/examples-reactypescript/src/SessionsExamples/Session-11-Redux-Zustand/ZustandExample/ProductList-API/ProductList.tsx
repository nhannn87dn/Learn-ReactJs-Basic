import React, { useEffect } from "react";
import useProductStore from "./productStore";

const ProductList: React.FC = () => {
  const { loading, products, error, fetchProducts, filterProductsByPrice } =
    useProductStore();

  useEffect(() => {
    // Gọi action để lấy danh sách sản phẩm khi component được mount
    fetchProducts(1); // Truyền mã danh mục (1) vào hàm fetchProducts
  }, [fetchProducts]);

  const handleFilterByPrice = async (price: number) => {
    // Gọi action để lọc danh sách sản phẩm theo giá
    await filterProductsByPrice(price);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => handleFilterByPrice(100)}>Filter by Price $100</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

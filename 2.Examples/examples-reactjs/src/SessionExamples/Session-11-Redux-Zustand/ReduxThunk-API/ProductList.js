import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";

const ProductList = ({ loading, products, error, fetchProducts }) => {
  useEffect(() => {
    // Gọi action để lấy danh sách sản phẩm khi component được mount
    fetchProducts(1); // Truyền mã danh mục (1) vào hàm fetchProducts
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  products: state.products,
  error: state.error,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);

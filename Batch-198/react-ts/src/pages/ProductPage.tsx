import Categories from "../components/Categories";
import FetchProduct from "../components/FetchProduct";

const ProductPage = () => {
  return (
    <div className="container">
      <Categories />
      <FetchProduct />
    </div>
  );
};

export default ProductPage;

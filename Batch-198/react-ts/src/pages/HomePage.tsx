import { Helmet } from "react-helmet-async";
import ProductList from "../components/homeworks/session02/ProductList";
import Profile from "../components/Profile";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <Categories />
      <Profile />
      <ProductList />
    </div>
  );
};

export default HomePage;

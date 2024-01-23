import { Helmet } from "react-helmet";
import SimpleCount from "./../components/SimpleCount";
import CountHangXom from "../components/SimpleCount/CountHangXom";

import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";

//Redux React
import { Provider } from "react-redux";
import { createStore } from "redux";
import { bankReducer } from "../BankApp/bankReducer";
import BankAccount from "../BankApp/BankAccount";
// Create Store
const store = createStore(bankReducer);

const HomePage = () => {
  const { err, isLoading, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts(); //gọi hàm này để đổ data vào cho products
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOme PAge</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-3xl font-bold">Home Page</h1>

      <Provider store={store}>
        <BankAccount />
      </Provider>

      <hr />
      <SimpleCount />
      <hr />
      <CountHangXom />
      <hr />
      <h2>Product Store List</h2>
      {isLoading && <div>Loading...</div>}
      {err && <div>{err}</div>}
      <ul>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <li key={index}>
                {product.title} - {product.price}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HomePage;

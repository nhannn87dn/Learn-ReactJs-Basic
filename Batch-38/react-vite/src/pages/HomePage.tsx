import { Helmet } from "react-helmet";
import SimpleCount from "./../components/SimpleCount";
import CountHangXom from "../components/SimpleCount/CountHangXom";

import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { useBearStore } from "../hooks/useBearStore";

const HomePage = () => {
  const { err, isLoading, products, fetchProducts } = useProducts();

  const { bears, addABear } = useBearStore();

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
      {bears}
      <button onClick={addABear}>+1</button>
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

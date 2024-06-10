import { Helmet } from "react-helmet";
import Count from "../components/Count";
import CountHangXom from "../components/Count/CountHangXom";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta name="description" content="Learn React at Softech Aptech" />
      </Helmet>
      <h1>Home Page</h1>
      Count
      <Count />
      <hr />
      <CountHangXom />
    </>
  );
};

export default HomePage;

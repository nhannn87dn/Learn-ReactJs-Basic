import { Helmet } from "react-helmet";

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
    </>
  );
};

export default HomePage;

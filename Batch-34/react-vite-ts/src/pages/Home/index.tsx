import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta
        name="description"
        content="Learn React at Softech Aptech"
      />
      </Helmet>
      <h1 className="py-5">Home Page</h1>
    </>
  );
};

export default Home;

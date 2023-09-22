import { Helmet } from "react-helmet";
import CountApp from "../../components/CountApp"
import CountZustand from "../../components/CountZustand";
import CountHangXom from "../../components/CountHangXom";

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
      <h2>useReducer</h2>
      <CountApp />
      <hr />
      <h2>Zustand</h2>
      <CountZustand />
      <h2>Hang xom</h2>
      <CountHangXom />
    </>
  );
};

export default Home;

//import { useNavigate } from "react-router";
import Count from "../components/Count";
import CountB from "../components/CountB";

const HomePage = () => {
  // const navigate = useNavigate();

  return (
    <>
      <title>Home</title>
      <meta name="description" content="Home description" />
      <main className="container mx-auto">
        <h1>HomePage</h1>
        <Count />
        <hr />
        <CountB />
      </main>
      ;
    </>
  );
};

export default HomePage;

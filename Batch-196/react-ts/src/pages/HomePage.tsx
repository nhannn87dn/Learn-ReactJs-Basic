import Count from "../components/Count";
import CountV2 from "../components/CountV2";

const HomePage = () => {
  return (
    <main className="container mx-auto my-5">
      <h1>HomePage</h1>
      <Count />
      <hr />
      <CountV2 />
    </main>
  );
};

export default HomePage;

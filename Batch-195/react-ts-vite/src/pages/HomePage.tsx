import Count from "../components/Count";
import CountV2 from "../components/CountV2";

const HomePage = () => {
  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="Home Page description" />
      <main className="container mx-auto my-5">
        <h1>Count</h1>
        <Count />
        <hr />
        <CountV2 />
      </main>
    </>
  );
};

export default HomePage;

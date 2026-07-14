import Count from "@/components/Count";
import HangXom from "@/components/HangXom";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <main className="container mx-auto my-5">
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1>Home Page</h1>
      <Count />
      <hr/>
      <HangXom />
    </main>
  );
};

export default HomePage;

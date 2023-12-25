import { useBrowserWidth } from "../hooks/useBrowserWidth";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const bWidth = useBrowserWidth();
  console.log("Home page Render");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta name="description" content="Learn React at Softech Aptech" />
      </Helmet>

      <h1 className="text-3xl font-bold">HomePage</h1>
      <h3>Browser Width: {bWidth}</h3>
      {bWidth < 425 ? "Mobile" : "Desktop"}
    </div>
  );
};

export default HomePage;

import Header from "./Header";
import Footer from "./Footer";
import { useBrowserWidth } from "../hooks/useBrowserWidth";

const HomePage = () => {
  const bWidth = useBrowserWidth();
  console.log("Home page Render");
  return (
    <div>
      <h1 className="text-3xl font-bold">HomePage</h1>
      <h3>Browser Width: {bWidth}</h3>
      {bWidth < 425 ? "Mobile" : "Desktop"}
    </div>
  );
};

export default HomePage;

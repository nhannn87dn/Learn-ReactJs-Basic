import Header from "./Header";
import Footer from "./Footer";
import { useBrowserWidth } from "../hooks/useBrowserWidth";

const HomePage = () => {
  const bWidth = useBrowserWidth();

  return (
    <div>
      <Header />
      <h1>HomePage</h1>
      <h3>Browser Width: {bWidth}</h3>
      {bWidth < 425 ? "Mobile" : "Desktop"}
      <Footer />
    </div>
  );
};

export default HomePage;

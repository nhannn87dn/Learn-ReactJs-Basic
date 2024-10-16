import { useState } from "react";
import Greet from "../components/Greet";
const HomePage = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <div className="container mx-auto">
      <h1>Home Page</h1>
      <button className="btn btn-primary" onClick={() => setToggle(!toogle)}>
        Toggle
      </button>
      {toogle && <Greet name="Nhan" />}
    </div>
  );
};

export default HomePage;

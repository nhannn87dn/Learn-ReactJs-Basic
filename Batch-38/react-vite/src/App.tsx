import "./App.css";
import Attributes from "./components/Attributes";
import ButtonSocial from "./components/ButtonSocial";
import { FaApple, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Attributes />
      <hr />
      <div className="flex flex-col gap-y-5">
        <ButtonSocial icon={<FaApple />} label="Apple" />
        <ButtonSocial varian="outline" icon={<FaGoogle />} label="Google" />
        <ButtonSocial varian="outline" icon={<FaFacebook />} label="Facebook" />
        <ButtonSocial varian="success" icon={<FaGithub />} label="Github" />
      </div>
    </div>
  );
}

export default App;

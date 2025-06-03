import "./App.css";
import ButtonV2 from "./components/ButtonV2";
import { LuCircleUser, LuCircleArrowOutDownLeft } from "react-icons/lu";
import ButtonV3 from "./components/ButtonV3";
import ButtonAction from "./components/ButtonAction";
import withPermissions from "./components/withPermissions";
import Attributes from "./components/Attributes";
// Sử dụng HOC
const ButtonWithAuth = withPermissions(ButtonAction);

function App() {
  const isAuthenticated = false; // Thay đổi thành true để kiểm tra khi đã đăng nhập
  const userName = "Ngọc Nguyễn";
  return (
    <div className="container mx-auto my-5">
      <Attributes />
      <hr />
      <div className="flex gap-x-3">
        <ButtonV2 icon={<LuCircleUser />} type="default" label="Login" />
        <ButtonV2
          icon={<LuCircleArrowOutDownLeft />}
          type="dark"
          label="Logout"
          onHandleCLick={() => {
            console.log("logout");
          }}
        />

        <hr />
        <ButtonV3 icon="a" label="Add to Cart" />
        <ButtonV3 icon="b" label="Buy Now" />
        <hr />
        <ButtonWithAuth isAuthenticated={isAuthenticated} name={userName} />
      </div>
    </div>
  );
}

export default App;

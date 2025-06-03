import "./App.css";
import ButtonV2 from "./components/ButtonV2";
import { LuCircleUser, LuCircleArrowOutDownLeft } from "react-icons/lu";
import ButtonV3 from "./components/ButtonV3";
import Attributes from "./components/Attributes";
import React from "react";

// Component gốc
const UserProfile = ({ name }: { name: string }) => {
  return <div>Xin chào, {name}!</div>;
};

// Higher-Order Component kiểm tra quyền truy cập
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = true; // Giả sử người dùng đã đăng nhập
      if (!isAuthenticated) {
        return <div>Bạn cần đăng nhập để truy cập.</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Sử dụng HOC
const UserProfileWithAuth = withAuth(UserProfile);

function App() {
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
        <UserProfileWithAuth name={userName} />
      </div>
    </div>
  );
}

export default App;

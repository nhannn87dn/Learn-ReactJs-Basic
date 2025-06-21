import Logo from "./Logo";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <header className=" bg-indigo-500 text-white py-4">
      <div className="container mx-auto">
        {/* component lồng vào nhau */}
        <div className="header-middle flex justify-between">
          <Logo />
          <Navigation />
          <UserInfo />
        </div>
      </div>
    </header>
  );
}

export default Header;

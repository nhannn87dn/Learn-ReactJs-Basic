import Logo from "./Logo";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <header className="flex justify-between">
      {/* component lồng vào nhau */}
      <Logo />
      <Navigation />
      <UserInfo />
    </header>
  );
}

export default Header;

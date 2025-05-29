import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      {/* component lồng vào nhau */}
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;

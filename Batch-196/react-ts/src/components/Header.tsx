import UserInfo from "./UserInfo";

import { useBrowserWidth } from "../hooks/useBrowserWidth";

const Header = () => {
  const browserWidth = useBrowserWidth();

  return (
    <header className="bg-indigo-500 text-white">
      <div className="container mx-auto ">
        <div className="header_middle flex justify-between items-center py-4">
          <div className="logo">LOGO - {browserWidth}</div>
          <nav>
            <ul className="flex gap-x-3">
              {browserWidth > 768 && (
                <>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </>
              )}
              {browserWidth < 768 && <li>Tablet</li>}
              {browserWidth < 501 && <li>Mobile</li>}
              <li>
                <UserInfo />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

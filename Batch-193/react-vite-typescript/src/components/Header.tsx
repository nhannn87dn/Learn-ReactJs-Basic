import Logo from "./Logo";
import Navigation from "./Navigation";
import { useShoppingCartStore } from "../stores/shoppingCartStore";
import { useState } from "react";

function Header() {
  const cartNumber = useShoppingCartStore((state) => state.countNumber);
  const products = useShoppingCartStore((state) => state.products);
  const [isShowCart, setIsShowCart] = useState(false);
  return (
    <header className=" bg-indigo-500 text-white py-4">
      <div className="container mx-auto">
        {/* component lồng vào nhau */}
        <div className="header-middle flex justify-between">
          <Logo />
          <Navigation />
          <div className="cart relative h-[40px]">
            <span
              onMouseEnter={() => {
                setIsShowCart(true);
              }}
              onMouseLeave={() => {
                setIsShowCart(false);
              }}
            >
              {cartNumber}
            </span>

            <div className="products-list absolute right-0 top-[40px bg-white shadow p-2]">
              {isShowCart &&
                products.length > 0 &&
                products.map((p) => {
                  return (
                    <div
                      key={p.id}
                      className="item text-gray-700 min-w-[300px]"
                    >
                      {p.name} - {p.price}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

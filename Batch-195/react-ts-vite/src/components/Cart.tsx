import { Link } from "react-router";
import { useCart } from "../stores/useCart";
const Cart = () => {
  const { products } = useCart();
  return (
    <Link to={"/cart"} className="flex">
      Giỏ hàng{" "}
      <span className="bg-amber-500 rounded-full h-[20px] w-[20px] text-white flex justify-center items-center">
        {products.length}
      </span>
    </Link>
  );
};

export default Cart;

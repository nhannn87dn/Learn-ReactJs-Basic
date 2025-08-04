import { Link } from "react-router";
import { useShoppingCartStore } from "../stores/useShoppingCart";

const CartInfo = () => {
  const { total } = useShoppingCartStore();
  return <Link to="/cart">{total}</Link>;
};

export default CartInfo;

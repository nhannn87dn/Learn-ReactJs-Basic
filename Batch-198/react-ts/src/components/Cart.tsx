import { useCart } from "../stores/cart-store";

const Cart = () => {
  const { totalItems } = useCart();
  return <span>{totalItems}</span>;
};

export default Cart;

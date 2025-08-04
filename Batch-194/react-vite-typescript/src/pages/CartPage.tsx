import { useShoppingCartStore } from "../stores/useShoppingCart";

const CartPage = () => {
  const { products, clearCart, removeItem } = useShoppingCartStore();
  if (products.length == 0) {
    return <p>Giỏ hàng trống</p>;
  }
  return (
    <main className="container mx-auto">
      <title>Cart Page</title>
      <meta name="description" content="Cart description" />
      <h1>CartPage</h1>
      <ul>
        {products.length > 0 &&
          products.map((p) => {
            return (
              <li>
                {p.title} - {p.price}{" "}
                <span onClick={() => removeItem(p.id)} className="text-red-500">
                  (Xóa)
                </span>
              </li>
            );
          })}
      </ul>
      <div className="actions">
        <button onClick={clearCart}>Xóa giỏ hàng</button>
      </div>
    </main>
  );
};

export default CartPage;

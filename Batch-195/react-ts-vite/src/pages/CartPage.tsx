import { Link } from "react-router";
import { useCart } from "../stores/useCart";

const CartPage = () => {
  const { products, updateProductQuantity, removeProduct, clearCart } =
    useCart();
  if (products.length === 0)
    return (
      <div className="p-6 text-center text-gray-500">
        <h3>Giỏ hàng trống</h3>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Giỏ hàng</h2>
        <div className="remove-all">
          <button
            onClick={() => {
              // Add functionality to remove all products from the cart
              clearCart();
            }}
            className="text-red-500 hover:text-red-700"
          >
            Xóa tất cả
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            {/* Thumbnail */}
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 rounded object-cover border"
            />

            {/* Thông tin */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.price.toLocaleString()}₫</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  updateProductQuantity(item.id, item.quantity - 1);
                }}
                className="px-3 py-1 border rounded"
              >
                -
              </button>

              <span className="min-w-[24px] text-center">{item.quantity}</span>

              <button
                onClick={() => {
                  updateProductQuantity(item.id, item.quantity + 1);
                }}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => {
                removeProduct(item.id);
              }}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Tổng tiền */}
      <div className="text-right mt-6 text-xl font-semibold">
        Tổng:{" "}
        {products
          .reduce((sum, p) => sum + p.price * p.quantity, 0)
          .toLocaleString()}
        ₫
      </div>
      <div className="cart-next-step">
        <button className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600">
          Tiến hành thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartPage;

import { useCart, type IProduct } from "../stores/useCart";
const AddToCart = ({ product }: { product: IProduct }) => {
  const { addProduct } = useCart();
  return (
    <button
      onClick={() => {
        addProduct({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Thêm vào giỏ hàng
    </button>
  );
};

export default AddToCart;

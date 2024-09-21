import { FaShoppingCart } from "react-icons/fa";
import styles from "./ButtonAddToCart.module.css";
import './ButtonAddToCart.css'

const ButtonAddToCard = () => {
  console.log(styles);

  return (
    <>
      <button className={styles.button_primary}>
        <FaShoppingCart /> Thêm vào giỏ hàng
      </button>
    </>
  );
};

export default ButtonAddToCard;

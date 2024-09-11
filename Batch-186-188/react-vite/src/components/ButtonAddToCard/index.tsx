import { FaShoppingCart } from "react-icons/fa";
import styles from "./ButtonAddToCart.module.css";

const ButtonAddToCard = () => {
  console.log(styles);

  return (
    <>
      <button className={styles.button}>
        <FaShoppingCart /> Thêm vào giỏ hàng
      </button>
    </>
  );
};

export default ButtonAddToCard;

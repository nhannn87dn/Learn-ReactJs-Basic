import styles from "./ProductList.module.css";

const products = ["Laptop", "Mouse", "Keyboard"];
console.log(styles);
//Dev A
const ProductList = () => {
  return (
    <ul>
      <li className={styles.primary_text}>{products[0]}</li>
      <li>{products[1]}</li>
      <li>{products[2]}</li>
    </ul>
  );
};

export default ProductList;

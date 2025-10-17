import styles from "./Profile.module.css";
import { ShoppingBag } from "lucide-react";

export default function Profile() {
  console.log("styles", styles);
  return (
    <>
      <ShoppingBag size={50} color="#3e9392" />
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      <p className={styles.section_subtitle}>Katherine Johnson</p>
    </>
  );
}

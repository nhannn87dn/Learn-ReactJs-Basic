import { useState } from "react";
import styles from './Exercise3.module.css'
const Exercise3 = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button onClick={()=>{
        setIsShow(!isShow)
      }} className="btn">Thêm vào giỏ hàng</button>
      {isShow && <div className={styles.message}>
        <span onClick={()=>{
            setIsShow(false)
        }} className={styles.close}>x</span>
        Thêm vào giỏ hàng thành công !
        </div>}
    </div>
  );
};

export default Exercise3;

import { useState, useEffect } from "react";
// Greet.js
function EffectCleanup() {
  const [count, setCount] = useState(0);
  console.log("Mounted");
  useEffect(() => {
    //Cứ 1s thì đi tăng biến count lên 1 đơn vị
    //setInterval --> hàm có sẳn của js
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log("This will run every second!");
    }, 1000); //đơn vị miliseconds

    //return đại diện cho giai đoạn Unmount trong lifeCycle
    return () => {
      console.log("Unmouted");
      clearInterval(interval);
    };
  }, []);
  return <h1>{count}</h1>;
}

export default EffectCleanup;

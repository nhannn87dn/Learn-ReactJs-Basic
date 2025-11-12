import { userContext } from "../context/userContext";
import { useContext } from "react";
const Chau = () => {
  const user = useContext(userContext);
  return (
    <div className="border border-amber-600">
      <h2>Chau</h2>
      <p>Làm sao để hiển thị biến {user?.name} ra đây</p>
    </div>
  );
};

export default Chau;

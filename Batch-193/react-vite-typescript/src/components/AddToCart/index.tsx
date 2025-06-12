import { useState } from "react";
import Modal from "./Modal";
const AddToCart = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div className="mb-5">
      <button onClick={() => setIsOpenModal(true)}>Thêm vào giỏ hàng</button>
      <Modal isOpen={isOpenModal} onClose={() => {
        setIsOpenModal(false)
      }}>
        Thêm vào giỏ hàng thành công !
      </Modal>
    </div>
  );
};

export default AddToCart;

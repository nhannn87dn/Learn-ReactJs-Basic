import { useState } from "react";
import Modal from "./Modal";

const Excersie03 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add to Cart
      </button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p>Đã thêm vào giỏ hàng thành công !</p>
      </Modal>
    </div>
  );
};

export default Excersie03;

const ButtonDeleteProduct = ({ id }: { id: number }) => {
  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        alert("Xóa sản phẩm thành công !");
      }
      console.log("<<=== 🚀 data ===>>", data);
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
    }
  };
  return (
    <button
      onClick={() => {
        console.log("Xóa sp có id", id);
        handleDeleteProduct();
      }}
    >
      Delete
    </button>
  );
};

export default ButtonDeleteProduct;

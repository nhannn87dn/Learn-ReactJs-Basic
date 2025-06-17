import axios from "axios";

const DeletePostAxios = ({ id }: { id: number }) => {
  const onHandleDelete = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(response);
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
    }
  };
  return (
    <button
      className="btn_danger inline-flex"
      onClick={() => onHandleDelete(id)}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-trash-icon lucide-trash"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>{" "}
      Xóa
    </button>
  );
};

export default DeletePostAxios;

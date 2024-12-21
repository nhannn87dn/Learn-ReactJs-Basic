import { useNavigate } from "react-router";
export default function HomePage() {
  const navigate = useNavigate();
  /*
    Dùng khi bạn muốn chuyển hướng đến một trang khác
    mà không cần phải sử dụng thẻ <Link>
    hoặc là chuyển hướng khi xử lý xong một số logic nào đó
    Ví dụ: Khi đăng nhập thành công thì chuyển hướng đến trang Dashboard
  */
  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          navigate("/blog"); // Chuyển hướng đến trang blog
        }}
      >
        Go to Blog
      </button>
    </>
  );
}

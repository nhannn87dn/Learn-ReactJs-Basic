import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold">LoginPage</h1>
      <button
        className="btn"
        onClick={() => {
          //nhảy về trang chủ
          navigate("/");
        }}
      >
        Return Home
      </button>
    </div>
  );
};

export default LoginPage;

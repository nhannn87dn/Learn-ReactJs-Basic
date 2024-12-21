import { useNavigate } from "react-router";
export default function BlogPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Blog Page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
}

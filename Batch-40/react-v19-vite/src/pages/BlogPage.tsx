import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useNavigate, useSearchParams } from "react-router";
export default function BlogPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  return (
    <>
      <Button>Shadcn/UI Button</Button>
      <title>Blog Page</title>
      <meta name="description" content="blog desc" />
      <h1>Blog Page</h1>
      <h2>current Page: {page}</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>

      <ul>
        <li>
          <Link to={"/blog/1"}>Post -1</Link>
        </li>
        <li>
          <Link to={"/blog/2"}>Post -2</Link>
        </li>
      </ul>
      <div>Phân trang</div>
      <div className="pagination space-x-2">
        <Link
          className="border border-blue-500 p-2 rounded"
          to={"/blog?page=1"}
        >
          1
        </Link>
        <Link
          className="border border-blue-500 p-2 rounded"
          to={"/blog?page=2"}
        >
          2
        </Link>
        <Link
          className="border border-blue-500 p-2 rounded"
          to={"/blog?page=3"}
        >
          3
        </Link>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta name="description" content="Learn React at Softech Aptech" />
      </Helmet>
      BlogPage
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default BlogPage;

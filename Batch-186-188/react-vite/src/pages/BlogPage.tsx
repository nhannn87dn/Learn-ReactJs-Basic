import Count from "../components/Count";
import { useCountStore } from "../stores/useCountStore";

const BlogPage = () => {
  const { count, changeCount } = useCountStore();
  return (
    <div className="container mx-auto">
      <h1>Blog Page</h1>
      <h1 className="text-3xl">{count}</h1>
      <button onClick={changeCount} className="btn btn-default">
        + 1
      </button>
      <hr />
      <h2>COUNT HANG XOM</h2>
      <Count />
    </div>
  );
};

export default BlogPage;

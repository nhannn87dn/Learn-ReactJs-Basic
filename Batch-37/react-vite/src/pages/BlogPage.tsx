import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPage = () => {
  //with Axios
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data; //Trả về 100 bài posts
  };

  // query là một object
  const query = useQuery<IPosts[], Error>({
    queryKey: ["posts"], //dăt một key bộ nhớ cache
    queryFn: getPosts, //hàm fetch data
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Page</title>
        <link rel="canonical" href="http://localhost:5173/blog" />
        <meta name="description" content="Blog Learn React at Softech Aptech" />
      </Helmet>
      <h1 className="text-3xl font-bold">Blog Page</h1>
      <ul>
        {query.data &&
          query.data.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  #ID: {post.id} - Title: {post.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogPage;

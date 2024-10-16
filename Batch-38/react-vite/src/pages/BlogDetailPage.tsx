import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

interface iPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogDetailPage = () => {
  const navigate = useNavigate();

  const params = useParams();
  console.log("<<=== 🚀 params ===>>", params);

  const id = params.slug ? parseInt(params.slug) : 0;
  //TODO: handle việc truyền id = 0;

  useEffect(() => {
    if (id === 0) {
      navigate("/blog"); //chuyển hướng sang trang /blog
    }
  }, [id]);

  const [post, setPost] = useState<iPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setIsLoading(false);
        setPost(response.data);
      };
      fetchData();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post?.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>BlogDetailPage Page</h1>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-3xl font-bold">{post?.title}</h2>
          <article>{post?.body}</article>
        </>
      )}
    </>
  );
};

export default BlogDetailPage;

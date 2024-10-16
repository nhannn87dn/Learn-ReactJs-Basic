import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet";

interface iPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const LoadingPost = () => {
  return (
    <>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="photo w-[180px]">
          <Skeleton height={120} width={180} />
        </div>
        <div className="content flex-1">
          <Skeleton count={3} />
        </div>
      </div>
    </>
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState<iPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setIsLoading(false);
        setPosts(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog PAge</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-3xl font-bold">Blog Page</h1>
      {isLoading ? (
        <LoadingPost />
      ) : (
        <ul>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`}>
                    #{post.id} - {post.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default BlogPage;

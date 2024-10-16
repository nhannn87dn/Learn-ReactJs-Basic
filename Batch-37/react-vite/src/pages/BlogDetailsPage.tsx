import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const slug = params.slug || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!/\d+/.test(slug)) {
      navigate("/"); //Chuyển hướng về trang chủ nếu ko ko phải là số
    }
  }, [slug, navigate]);

  const id = parseInt(slug);

  //gọi API để lấy thông tin chi tiết của bài post có id = id
  //with Axios
  const getPostDetails = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data; //Trả chi tiết 1 bài post
  };

  // query là một object
  const { data } = useQuery<IPosts, Error>({
    queryKey: ["posts", 1], //dăt một key bộ nhớ cache
    queryFn: getPostDetails, //hàm fetch data
  });
  return (
    <div>
      <div>#ID: {id}</div>
      <h1 className="text-3xl font-bold">{data && data?.title}</h1>
      <div className="content">
        <p>{data && data?.body}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

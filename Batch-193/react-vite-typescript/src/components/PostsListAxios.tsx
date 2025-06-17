import React, { useEffect, useState } from "react";
import axios from "axios";
import DeletePostAxios from "./DeletePostAxios";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsListAxios = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);

  //Sử dụng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    //Code logic gọi api ở trong này
    const URL = "https://jsonplaceholder.typicode.com/posts";

    //Áp dụng async await
    const fetchData = async () => {
      try {
        //Bật cờ cho loading xoay
        setIsLoading(true);
        //const response = await fetch(URL);
        const response = await axios.get(URL);
        console.log("<<=== 🚀 response ===>>", response);
        //Nếu lấy thành công, thì mới để cập nhật lại state posts
        if (response.status === 200) {
          setPosts(response.data);
        }
      } catch (error) {
        //khi gặp lỗi
        console.log(error);
        setErr("Có lỗi xảy ra");
      } finally {
        //Dù thành công hay thất bại thì cũng đi set lại Loading ==> false
        setIsLoading(false);
      }
    };
    fetchData(); //gọi hàm để thực thi
  }, []); //để depd là  một mảng rỗng để gọi api 1 lần duy nhất

  console.log("<<=== 🚀 posts ===>>", posts);
  return (
    <div>
      <h2>PostsList</h2>
      {err && <p>Có lỗi khi gọi API</p>}
      {isLoading && <p>Loading .... </p>}
      <ul>
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                {post.id} - {post.title} - <DeletePostAxios id={post.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostsListAxios;

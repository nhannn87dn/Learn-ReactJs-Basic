import {useParams} from 'react-router-dom';
import React from 'react';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string
}



const  BlogDetailPage  =( ) => {
  const params = useParams();
  const id = params.id;
  //const {id} = params;
  const [post, setPost] = React.useState<IPost | null>(null)
  
  //Gọi API để lấy thông tin dựa vào ID đã lấy được từ URL xuống
  React.useEffect(()=>{
    const getPosts = async ()=>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    }
    getPosts();
  },[])

  console.log(params);
  return (
    <div>
      <strong>ID: {id}</strong>
      <h1 className='text-2xl font-bold'>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )
}

export default BlogDetailPage
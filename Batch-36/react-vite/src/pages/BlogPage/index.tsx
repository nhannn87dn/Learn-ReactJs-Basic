import React from "react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string
}

const  BlogPage  =( ) => {
  const [posts, setPosts] = React.useState<IPost[] | null>(null);

  React.useEffect(()=>{

    const getPosts = async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }
    getPosts();

  },[])

  return (
    <div>
      {/* Thay doi noi dung the title */}
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <h1>Blog Page</h1>
      <ul>
          {
            posts && posts.map((post)=>{
              return (
                <li key={post.id}>
                <Link to={`/blog/${post.id}`}>#{post.id} - {post.title}</Link>  
                  </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default BlogPage
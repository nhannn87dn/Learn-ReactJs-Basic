import React from 'react';
import axios from 'axios';

const NetPost = () => {
  const [posts,setPosts] = React.useState([]);

    React.useEffect(()=>{

        const getPosts = async () => {
           
            const url = 'https://jsonplaceholder.typicode.com/posts';

            //const options = {};
            //url: endpoint API
            //options là tùy chọn
            //GET method
            // const response = await fetch(url,options);
            // const results = await response.json();
            //setPosts(results);

            //Dùng Axios
           try {
                const data = await axios.get(url)
                .then((response) => response.data);

                if(data){
                    setPosts(data);
                }
           } catch (error) {
                console.log(error);
           }
      
        }

        getPosts();

    },[])

  return (
    <div>
        <h1>Tin tức</h1>
        <ul>
            {posts.map(post =>(
                <li key={post.id}>{post.title} </li>
            ))}
        </ul>
    </div>
  )
}

export default NetPost
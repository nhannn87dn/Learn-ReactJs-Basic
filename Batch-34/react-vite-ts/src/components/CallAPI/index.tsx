import React from 'react'
import axios from 'axios';
type PostType = {
    id: number,
    userId: number,
    title: string,
    body: string
}

const CallAPI = () => {
    const [posts, setPosts] = React.useState<PostType[]>([]);

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (data) {
        // handle success
        console.log(data);
        //lấy data gán cho State
       // setPosts(data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

  return (
    <div>
       <h2>Posts List</h2>
       <ul>
        {
            posts.map(item=> {
                return (
                    <li>
                        {item.title}
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default CallAPI
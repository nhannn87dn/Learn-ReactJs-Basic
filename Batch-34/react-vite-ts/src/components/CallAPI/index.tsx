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
    console.log('CallAPI');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        
        const fetchPosts = async ()=>{
            setLoading(true);
            try {

                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(data);
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
           
        }
        fetchPosts();
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(function (data) {
        //     // handle success
        //     console.log(data.data);
        //     //lấy data gán cho State
        // setPosts(data.data)
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })

    },[])
    

  return (
    <div>
       <h2>Posts List</h2>
       {loading && (<div>Loading......</div>)}
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
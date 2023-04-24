import React from 'react'

interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface CommentType {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const GetMethod = () => {
    let [posts, setPosts] = React.useState<[CommentType] | null>(null);
    let [loading, setLoading] = React.useState(false);

    console.log(posts);

    React.useEffect(()=>{
        
        let fetchedPosts = async ()=>{

            try {
                setLoading(true);
                //Method GET
                const response = await fetch('https://jsonplaceholder.typicode.com/comments')
                let result =  await response.json();

                console.log(result);
                setPosts(result);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchedPosts();

    },[])

  return (
    <div>
        <h1>GetMethod</h1>
        {loading && <div>Loading...</div>}
        <ul>
            {posts &&  posts.length > 0 && posts.map((post)=>{
                return (
                    <li>{post.name}</li>
                )
            })
            }
        </ul>
    </div>
  )
}

export default GetMethod
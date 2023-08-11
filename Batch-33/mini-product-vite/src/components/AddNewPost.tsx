import React from 'react'
import axios from 'axios'

interface PostType {
    userId?: number;
    body?: string;
    title?: string;
}

const AddNewPost = () => {
    const [post, setPost] = React.useState<PostType | null>(null);
    const [isSubmiting, setIsSubmiting] = React.useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmiting(true);
        console.log(post);
        //call API gui post len Backend de luu vao Database
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const payload = post;
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(url,payload,options)
          .then(function (response) {
                console.log(response);
                console.log('Submit successful');
                setIsSubmiting(false);
                setPost(null)
        })
        .catch(function (error) {
            console.log(error);
        });
      };
    
    console.log(post);
  return (
    <div>
        <h2>AddNewPost</h2>
        <form action="" onSubmit={handleSubmit}>
            <input placeholder='userId' value={post?.userId} type="text" name='userId' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newPost = {...post,userId: parseInt(e.target.value)}
                setPost(newPost);
            }} />
            <input placeholder='body' value={post?.body} type="text" name='body' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newPost = {...post,body: e.target.value}
                setPost(newPost);
            }} />
            <input placeholder='title' value={post?.title} type="text" name='title' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                const newPost = {...post,title: e.target.value}
                setPost(newPost);
            }} />
            <button disabled={isSubmiting} type='submit'>{isSubmiting ? 'Submiting...' :  'Submit'}</button>
        </form>

        </div>
  )
}

export default AddNewPost
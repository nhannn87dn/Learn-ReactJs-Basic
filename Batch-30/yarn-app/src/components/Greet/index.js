import React, {useEffect} from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState('');
  const [posts,setPosts] = React.useState([]);
  const [current,setCurrent] = React.useState('posts');
  const [show, setShow] = React.useState(false);
  const [count, setCount] = React.useState(0);
  /**
   * chạy mỗi lần component render
   *  React.useEffect(()=>{
    document.title = `Greetings to ${name}`; // Side-effect!
    console.log('useEffect run');
  })
  */

  //Chỉ chạy 1 lần đầu tiên khi component render
  React.useEffect(()=>{
    document.title = `Greetings to ${name}`; // Side-effect!
    console.log('useEffect run');
  },[]);

  React.useEffect(()=>{
    async function getPosts() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${current}`);
      const jsonData = await response.json();
      console.log(jsonData);

      setPosts(jsonData);

      console.log(current)
    }

    getPosts();

  },[current])

  useEffect(() => {
    const handleGoTop = ()=> {
        if(window.scrollY >= 200){
            setShow(true)
        }else{
            setShow(false);
        }
    }

    window.addEventListener('scroll', handleGoTop);

    //cleanup this component
    return () => {
      window.removeEventListener('scroll', handleGoTop);
    };
  }, []);

  useEffect(()=> {
    let timer = setInterval(() => {
        setCount((count) => count + 1);
        console.log('This will run every second!');
    }, 1000);

    return ()=>{
      clearTimeout(timer)
      console.log('unMounted');
    }

},[]);
 
 
  return <div>
    {message}

    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />

    <div>
      <button onClick={()=>{
        setCurrent(prev=> 'posts')
      }} className={current === 'posts'? 'active_button': ''}>Posts</button>  
      <button onClick={()=>{
        setCurrent(prev=> 'comments')
      }} className={current === 'comments'? 'active_button': ''}>Comments</button>
      <button onClick={()=>{
        setCurrent(prev=> 'albums')
      }} className={current === 'albums'? 'active_button': ''}>Albums</button>  
    </div>
    <ul>
    {
      posts.map((post)=>{
        return (
          <li key={post.id}>{post.title || post.name}</li>
        )

      })
    }
    </ul>
    <div style={{height: '500px'}}>dsdsdsds</div>
      {show && <div className='gotop'>Go Top</div>}
    </div>;       // Calculates output
}

export default Greet
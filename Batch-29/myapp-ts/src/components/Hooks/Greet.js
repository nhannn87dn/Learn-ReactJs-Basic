import React, { useEffect } from "react";

//Syntax useEffect(callback, [options]);

// 1.useEffect(callback)
// - Chạy lại sau mỗi lần component render
// 2.useEffect(callback,[])
// - Chỉ chạy một lần duy nhất khi component render lần đầu tiên
// 3.useEffect(callback, [dev])
// - Chỉ chạy một lần duy nhất khi component render lần đầu tiên
// - Chỉ chạy lại lần tiếp theo khi mà dependencies thay đổi 

export default function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [type, setType] = React.useState("posts");
  const [show, setShow] = React.useState(false);
  const [count, setCount] = React.useState(0);
  console.log("Mounted");

  console.log(type);

  // useEffect(() => {
  //    document.title = `${title}`; // Side-effect!
  //    console.log('used effect');
  // })
  //3s
  //document.title = `${title}`; // Side-effect!
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
    console.log("used effect");
  }, [type]);

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
      //
      //console.log('Unmouting - removeEventListener');
    };
  }, []);


  useEffect(()=> {
    let time = setInterval(() => {
        setCount((count) => count + 1);
        console.log('This will run every second!');
    }, 1000);

    return ()=>{
      clearInterval(time);
      console.log('Unmouting - clearInterval');
    }
},[]);

  return (
    <div>
      <h1>{count}</h1>
      {message}
      <div>
        <button
          style={
            type === "posts"
              ? { backgroundColor: "#212121", color: "#fff" }
              : {}
          }
          onClick={() => {
            setType("posts");
          }}
        >
          posts
        </button>
        <button
          style={
            type === "comments"
              ? { backgroundColor: "#212121", color: "#fff" }
              : {}
          }
          onClick={() => {
            setType("comments");
          }}
        >
          comments
        </button>
        <button
          style={
            type === "albums"
              ? { backgroundColor: "#212121", color: "#fff" }
              : {}
          }
          onClick={() => {
            setType("albums");
          }}
        >
          albums
        </button>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
      {show && <button 
        style={{ 
            position: 'fixed',
            right: 20,
            bottom: 20,
        }}
      >Go To</button>}
    </div>
      {console.log("Render")}
    </div>
  ); // Calculates output
}

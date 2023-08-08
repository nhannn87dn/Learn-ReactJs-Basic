import React from 'react';

function Greeting() {
const [title, setTitle] = React.useState('');
const [posts,setPost] = React.useState([]);
const [show, setShow] = React.useState(false);
const [type,setType] = React.useState('posts');
    
    console.log('render');

    /**
     * useEffect(<callback function>, [dependency])
     * dependency là một tham số tùy chọn
     */

    React.useEffect(()=>{
        /* chạy lại mỗi khi component re-render */
        document.title = title; // Side-effect!
        console.log('3');
    });

    let url = `https://jsonplaceholder.typicode.com/${type}`;
    
    /**
     * Lifecycle - Mounted
     * 
     */
    React.useEffect(() => {
        //Runs only on the first render
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setPost(json)
        });
    }, [type]); // <- add empty brackets here
    
    React.useEffect(() => {
        const handleGoTop = ()=> {
            if(window.scrollY >= 200){
                setShow(true)
            }else{
                setShow(false);
            }
    
        }
        window.addEventListener('scroll', handleGoTop);
    
        // cleanup this component
        //tương với sự kiện Unmouted
        return () => {
           window.removeEventListener('scroll', handleGoTop);
        };
      }, []);

    return <div>
        Hello
         <input 
         cl
         type="text"
         value={title}
         onChange={(e)=>{
            setTitle(e.target.value)
         }}
          />

          <div>
            <button onClick={()=>{
                setType('posts')
            }}>Load Posts</button>
            <button onClick={()=>{
                setType('albums')
            }}>Load Albums</button>
            <button onClick={()=>{
                setType('todos')
            }}>Load todos</button>
          </div>


          <ul>
          {
            posts.map(item => {
                return (
                    <li>{item.title}</li>
                )
            })
          }
          </ul>
        {console.log('2')}

        {show && <button 
            style={{ 
                position: 'fixed',
                right: 20,
                bottom: 20,
            }}
        >Go To</button>}
        </div>;       // Calculates output
}
export default Greeting
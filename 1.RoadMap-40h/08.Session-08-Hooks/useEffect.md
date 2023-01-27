Example này dùng chung cho các ví dụ dưới đây:
```js
//App.js
import Content from '/.Content';
function App(){
    const [toogle, setToggle] = use.State(false);
    return (
        <div>
        <button  onClick={()=>setToggle(!toogle)}>Toggle</button>
        {toogle && Content}
        </div>

    )
}
```
1.useEffect CALL API
-  useEffect & Axios async await
- https://jsonplaceholder.typicode.com/

```js
import axios from 'axios';
const Content = () => {
  const [title, setTitle] = useState('');
  const [posts, setPost] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                //setPost(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);
  return(
    <div>
    <h1>{title}</h1>
    <input 
    type='text'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
     />
    <ul>
        {post.map(post=> {
            <li key={post.id}>{post.title}</li>
        })}
    </ul>
    </div>

  )
}
```

2. useEffect with DOM event

Bài toán: Khi kéo chuột trên 1 đoạn hoảng 200px thì xuất hiện nút **Go to Top**, khi kéo lên trên thì ẩn lại.

```js
//....App.js

const Content = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleGoTop = ()=> {
        if(window.scrollY >= 200){
            setShow(true)
        }else{
            setShow(false);
        }

    }
    window.addEventListener('scroll', handleGoTop);

    // cleanup this component
    // return () => {
    //   window.removeEventListener('scroll', handleGoTop);
    // };
  }, []);

  return (
    <div>
      {show && <button 
        style={{ 
            position: 'fixed',
            right: 20,
            bottom: 20,
        }}
      >Go To</button>}
    </div>
  );
};

export default IntervalExample;
```



3. useEffect with timer function

```js

// Content.js
function Content(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        setInterval(() => {
            setCount((count) => count + 1);
            console.log('This will run every second!');
        }, 1000);


    },[]);
    return (
        <h1>{count}</h1>
    )
}
```

Khi Toogle button thì sinh ra vấn đề là `Memory leak`

fix lại ví dụ trên

```js
useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
```
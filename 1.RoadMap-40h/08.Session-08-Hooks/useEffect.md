# useEffect Hook

- useEffect cho phép bạn thực hiện các hiệu ứng phụ trong các Components của bạn.
- Effects sẽ chạy sau khi component đã rendering.
- Dùng khi nào: fetching data, directly updating the DOM, and có sử dụng đến timers
- useEffect có 2 tham số. Tham số thứ 2 là tùy chọn

> `useEffect(<function>, <dependency>)`

### 🔷 **2.1 Cách dùng**

1. Không có dependency:

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
  //Runs on every render
});
```

2. Dependency là một mảng rổng:

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
  //Runs only on the first render
}, []); // <- add empty brackets here
```

3. Dependency là một Props hoặc State:

```js
/**
 * Lifecycle - Update
 */
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

-------------------------------
=> Lưu ý: Luôn đúng cho cả 3 cách dùng trên

- Callback luôn được gọi sau khi component đã mounted
- Cleanup luôn được gọi trước khi component unmounted

### 🔷 **2.2 Effect Cleanup (Unmouting)***

- Sử dụng để hủy effects --> chống tràn bộ nhớ (memory leaks)
- Khi nào dùng: Khi dùng Timeouts, subscriptions, event listeners hoặc các effects khác không cần thiết sử dụng đến nũa.

```js
useEffect(() => {
    let timer = setTimeout(() => {
      console.log('Running');
    setCount((prev) => prev + 1);
  }, 1000);
  
  // Có return trả về --> Unmouting
  
    return () => {
      console.log('unMounted');
      clearTimeout(timer)
    }
  }, []);
```

 Open and Close dialog

```js
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```

Subscribing to events

```js
useEffect(() => {
  function handleScroll(e) {
    console.log(e.clientX, e.clientY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Triggering animations

```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```

Fetching data

```js
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

```js
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

   fetch(API, {
      signal: signal
    })
    .then((response) => response.json())
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((err) => {
      if (err.name === 'AbortError') {
        console.log('successfully aborted');
      } else {
        // handle error
      }
    });
  return () => {
    // cancel the request before component unmounts
    controller.abort();
  };
}, []);
```

### 🔷 **2.3 Không cần phải dùng Effect**

- Một số logic chỉ chạy 1 lần khi ứng dụng khởi chạy. Bạn đặt chúng ra bên ngoài Component

```js
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

- Xem thêm: <https://beta.reactjs.org/learn/you-might-not-need-an-effect>

 =============================

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

- useEffect & Axios async await
- <https://jsonplaceholder.typicode.com/>

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

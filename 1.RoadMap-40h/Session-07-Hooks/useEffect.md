# useEffect Hook

## 🔷 **Side-Effects**

- Side-Effects là một khái niệm chung trong lập trình phần mềm, được hiểu là khi có một tác động xảy ra thì nó dẫn tới việc dữ liệu của chường trình bị thay đổi

- Trong React các function components sử dụng các Props/ State để tính toán dữ liệu đầu ra (từ là return). Nếu Component thực hiện việc tính toán không nhắm tới mục tiêu đầu ra thì các việc tính toán này được gọi với một khái niệm `Side-Effects`.

Ví dụ về Side-Effects
```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  // Bad!
  document.title = `Greetings to ${name}`; // Side-effect!
  return <div>{message}</div>;       // Calculates output
}

```

## 🔷 **useEffect**

Trong React chúng ta ưu tiên luồng xử lý để làm sao Render UI ra màn hình nhanh nhất.

Do vậy tất cả những vấn đề Side-Effects chúng ta đưa vào useEffect để xử lý.

- useEffect cho phép bạn thực hiện các hiệu ứng phụ trong các Components của bạn.
- Effects sẽ chạy sau khi component đã rendering.

Doc: <https://react.dev/reference/react/useEffect>

## 🔷 **Khi nào thì dùng useEffect**

- update DOM
- Call API
- Evens: add, remove event listener
- Observer pattern : Subscribe and Unsubscribe
- Closure
- Timer: setTimeout, setInterval, clearTimeout, clearInterval
- Mounted/unmounted

## 🔷 **Cách dùng**

useEffect có 2 tham số. Tham số thứ 2 là tùy chọn

> `useEffect(<callback function>, [dependency])`


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


=============================

### Example này dùng chung cho các ví dụ dưới đây


App.js

```js

import Greet from '/.Greet';
function App(){
    const [toogle, setToggle] = use.State(false);
    return (
        <div>
        <button  onClick={()=>setToggle(!toogle)}>Toggle</button>
        {toogle && <Greet name="Aptech" />}
        </div>

    )
}
```

1. 😍 **useEffect update DOM**

Tạo một input nhập vào thì thay đổi nội dung title

```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState('');
  console.log(`Greet render, ${name}!`);
  //bad
  document.title = `${title}`; // Side-effect!
  return (<div>
    <h1>{message}</h1>
    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
  </div>);       // Calculates output
}

```
Với cách code trên thì mỗi khi chúng ta thay đổi giá trị input thì Greet re-render.

2. 😍 **useEffect CALL API**

- useEffect & Axios async await
- <https://jsonplaceholder.typicode.com/>


```js
import axios from 'axios';
const Greet = () => {
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

```js
import axios from 'axios';
const Greet = () => {
  const [title, setTitle] = useState('');

  //Chưa dùng đến useEffect
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (data) {
      // handle success
      console.log(data);
     
  })
  .catch(function (error) {
      // handle error
      console.log(error);
  })
    
  return(
    <div>
    <h1>{title}</h1>
    <input 
    type='text'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
     />
   
    </div>

  )
}
```
Qua ví dụ này nếu input thay đổi thì nó liên tục gọi API

Do vậy chung ta nên đưa nó vào useEffect như ví dụ 1.

```js
useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (data) {
        // handle success
        console.log(data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
})

```

Trong thực tế thì sau khi CALL API thì nó lấy data đó để đưa ra giao diện người dùng.

```js
import axios from 'axios';
const Greet = () => {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);

  //Dùng useEffect
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (data) {
          // handle success
          console.log(data);
          //lấy data gán cho State
          setPosts(data)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
  })
    
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

Mở tab Network lên ta thấy nó gửi request liên tục

- Nguyên tắc là mỗi khi setState thì component re-render.
- Nó chạy đến đoạn useEffect thì nó call API, rồi lại đi setState

Vô hình nó tại ra một vòng lặp vô hạn quá trình trên nên dẫn tới việc call API liên tục ==> gây TREO CPU

=> CÁCH GIẢI QUYẾT

Dùng useEffect với dependencies rổng []

> useEffect(callback, [])


```js
//Dùng useEffect
// API chỉ gọi 1 lần duy nhất khi component render
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (data) {
          // handle success
          console.log(data);
          //lấy data gán cho State
          setPosts(data)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
  },[])
```

Nâng cáp ví dụ trên với việc tạo ra 3 tùy chọn hiển thị nội dung. posts / comments / albums

- Tạo ra 3 button tương ứng với 3 tùy chọn trên.
- Khi chọn button nào thì load nội dung cho tùy chọn đó


3. 😍 **useEffect with DOM event**

Bài toán: Khi kéo chuột trên 1 đoạn hoảng 200px thì xuất hiện nút **Go to Top**, khi kéo lên trên thì ẩn lại.

```js
//....App.js

const Greet = () => {
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

4. 😍 **useEffect with timer function**

```js

// Greet.js
function Greet(){
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


## 🔷 **Effect Cleanup (Unmouting)**

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

## 🔷 **Không cần phải dùng Effect**

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

 
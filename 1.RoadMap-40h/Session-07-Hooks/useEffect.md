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

> `useEffect(<callback function>, [dependencies])`

Chi tiết ra như dưới đây:

```js
useEffect(()=>{

    // Thực hiện tác vụ phụ ở đây
    // ...

    // Hủy bỏ tác vụ phụ nếu cần thiết
    return () => {
      // ...
    };

}, [dependencies);
```

Thì qua đó chúng ta có 3 trường hợp xảy ra khi sử dụng useEffect

### 1 - Không có dependency

Cú pháp: 

Cách viết này nó đại diện cho giai đoạn Mounted trong Lifecycle, Component được gắn vào App

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
  //Callback sẽ chạy mỗi khi component Render
});
```

Khi nào thì dùng: 

- Khi bạn các Side-Effects cần thực hiện sau khi component Render xong
- Và muốn nó thực hiện lại mỗi khi Component Render


Ví dụ minh họa:

App.js (Đoạn code này dùng cho tất cả các ví dụ dưới đây)

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


😍 **useEffect update DOM**

Tạo một input nhập vào thì thay đổi nội dung title

```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState('');
  console.log(`Greet render, ${name}!`);
  //Để như vậy thì không tốt
  document.title = `${title}`; // Side-effect!
  return (<div>
    <h1>{message}</h1>
    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
  </div>);       // Calculates output
}

```

Với cách code trên thì mỗi khi chúng ta thay đổi giá trị input thì Greet `re-render` và title được thay đổi theo

Nhưng trong React, Component thực hiện nhiệm vụ render UI người dùng nên chúng ta phải ưu tiên việc nó render ra UI càng sớm càng tốt

Trong ví dụ trên:

```js
document.title = `${title}`; // Side-effect!
```
Dòng code này chạy liên tục mỗi lần Greet re-render, giá sử mà logic này phức tạp --> việc render UI bị trễ lại ==> Không ổn.

Cách giải quyết là đưa Side-effect vào bên trong useEffect

```js
useEffect(() => {
  document.title = `${title}`; // Side-effect!
});
```

### 2 - Dependency là một mảng rỗng

Cú pháp: 

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
   //Callback chỉ chạy trong lần đầu tiên component Render
}, []); // <- dependency là một mảng rỗng
```

Khi nào thì dùng:

- Khi bạn các Side-Effects cần thực hiện sau khi component Render xong
- Và muốn nó thực hiện duy nhất trong lần đầu tiên Component Render



Ví dụ minh họa:


```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState('Aptech');
  console.log(`Greet render, ${name}!`);
  useEffect(() => {
    document.title = `${title}`; // Side-effect!
  }, []); // <== Dependencies là mảng rỗng
  return (<div>
    <h1>{message}</h1>
    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
  </div>);       // Calculates output
}

```

Với ví dụ này thì title được thay đổi lần đầu tiên, còn khi bạn thay đổi input thì title không được update lại.


### 3 - Dependency là một Props hoặc State

Cú pháp: Nó đại diện cho giai đoạn Update trong Lifecycle

```js
/**
 * Lifecycle - Update
 */
useEffect(() => {
  //Callback chỉ chạy trong lần đầu tiên component Render
  //Và nó chạy lại mỗi khi props, hoặc state thay đổi giá trị
}, [prop, state]);
```

Khi nào thì dùng:

- Khi bạn các Side-Effects cần thực hiện sau khi component Render xong
- Và muốn nó thực hiện ngay trong lần đầu tiên Component Render
- Và muốn nó thực hiện LẠI mỗi khi state, hay prop thay đổi giá trị

Ví dụ minh họa:


```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState();
  const [person, setPerson] = React.useState('Jonh');
  console.log(`Greet render, ${name}!`);
  useEffect(() => {
    document.title = `Chào mừng ${person} đến với  ${name} !`; // Side-effect!
  }, [person]); // <== Dependencies thêm vào state person
  return (<div>
    <h1>{message}</h1>
    <div>
      <button onClick={()=> {
          setPerson('Jonh')
        }}>Jonh</button>
      <button onClick={()=> {
          setPerson('Alice')
        }}>Alice</button>
      <button onClick={()=> {
          setPerson('Sarah')
        }}>Sarah</button>
    </div>
    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
  </div>);       // Calculates output
}

```

Qua ví dụ trên ngay trong lần đầu tiên chúng ta thấy title được thay đổi thành `Chào mừng Jonh đến với Aptech`.

Và mỗi lần chúng ta click vào các button thì title được update lại vì state person được thêm vào dependency, person thay đổi thì component Re-render --> callback của useEffect chạy lại

Nếu như bạn thay đổi title ở input --> không có chuyện gì xảy ra với title vì dependency nó không phụ thuộc vào state này


-------------------------------
=> Lưu ý: Luôn đúng cho cả 3 cách dùng trên

- Callback luôn được gọi sau khi component đã mounted
- Cleanup luôn được gọi trước khi component unmounted



***



## 🔷 **Effect Cleanup (Unmouting)**

- Sử dụng để hủy effects --> chống tràn bộ nhớ (memory leaks)
- Khi nào dùng: Khi dùng Timeouts, subscriptions, event listeners hoặc các effects khác không cần thiết sử dụng đến nũa.

```js
useEffect(() => {
  // Thực hiện tác vụ phụ ở đây
  // ...

  // Hủy bỏ tác vụ phụ nếu cần thiết
  return () => {
    // ...
  };
}, dependencies);
```



😍 **useEffect with DOM event**

Bài toán: Khi kéo chuột trên 1 đoạn hoảng 200px thì xuất hiện nút **Go to Top**, khi kéo lên trên thì ẩn lại.

```js
//....App.js

const Greet = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleGoTop = ()=> {
        console.log(window.scrollY);

        if(window.scrollY >= 200){
            console.log('set state');
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

  console.log('re-render');

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

Nếu để như vậy thì khi component được unmouted ra khỏi App thì sự kiện `scroll` ở cấp độ window vẫn đang được lắng nghe. Sư kiện này được lưu trữ bởi một giá trị tham chiếu trong bộ nhớ.

Khi Mount, Unmount liên tục --> mỗi lần như vậy bộ nhớ lại cấp phát ra thêm một giá trị tham chiếu mới cho sự kiện. Các giá trị tham chiếu đó bạn không dùng lại được nữa.

Mỗi lần component update state thì xuất hiện lỗi memory leak ở console

😍 **useEffect with timer function**

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


Sử dụng useEffect có `return`


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

## 🔷 **Không cần phải dùng Effect KHI**

- Một số logic chỉ chạy 1 lần khi ứng dụng khởi chạy và nó không liên quan đến state, props của component thì Bạn đặt chúng ra bên ngoài Component

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

 
# `useEffect` và Vòng Đời Component (LifeCycle)

## 1. Giới thiệu `useEffect`

### `useEffect` là gì?

**`useEffect`** là một *Hook* (hàm đặc biệt) trong React. Nó cho phép bạn thực hiện các **"tác dụng phụ" (side effects)** trong các component dạng hàm (functional components).

### "Side Effect" là gì?

Hãy coi công việc chính của một component là render (hiển thị) giao diện. Bất kỳ hành động nào mà component cần thực hiện bên ngoài luồng render đó đều được coi là một "side effect".

> **Nói cách khác:** Side effects là những hành động tương tác với thế giới bên ngoài component.

Các ví dụ phổ biến nhất bao gồm:

* Lấy dữ liệu từ API.
* Thiết lập và hủy các subscription (kết nối thời gian thực).
* Thay đổi trực tiếp DOM (ví dụ: thay đổi tiêu đề trang, focus vào ô input).
* Thiết lập bộ đếm thời gian như `setTimeout` hoặc `setInterval`.

Ví dụ về Side-Effects

```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  // Bad!
  document.title = `Greetings to ${name}`; // Side-effect!
  return <div>{message}</div>;       // Calculates output
}

```

---

## 2. Vì sao cần `useEffect`?

`useEffect` giúp chúng ta "bắt" được các giai đoạn trong vòng đời (lifecycle) của một component để thực hiện side effect vào đúng thời điểm.

1. **Mounting (Gắn vào):** Component được tạo và chèn vào DOM lần đầu tiên.
2. **Updating (Cập nhật):** Component được render lại do `props` hoặc `state` thay đổi.
3. **Unmounting (Gỡ ra):** Component bị xóa khỏi DOM.

**`useEffect` là công cụ hợp nhất giúp bạn xử lý logic cho cả 3 giai đoạn này.**

---

## 3. Cách sử dụng `useEffect`

### 3.1 Cú pháp cơ bản của `useEffect` như sau

useEffect có 2 tham số. Tham số thứ 2 là tùy chọn

```jsx
useEffect(() => {
  // Hàm callback chứa logic của side effect
  
  return () => {
    // Hàm (optional) dùng để dọn dẹp (cleanup)
  }
}, [dependencyArray]); // Mảng phụ thuộc
```

**Mảng phụ thuộc `[dependencyArray]` là phần quan trọng nhất,** nó kiểm soát khi nào effect của bạn sẽ được chạy. Hãy cùng xem xét từng trường hợp.

### Trường hợp 1: Không có Mảng phụ thuộc (Chạy sau MỖI LẦN render)

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
  //Callback sẽ chạy mỗi khi component Render
});
```

Khi bạn **hoàn toàn bỏ qua** mảng phụ thuộc, effect sẽ chạy sau **mỗi lần component render**, bất kể lý do render là gì (thay đổi state, prop, hay component cha render lại).

* **Hành vi:** Chạy lần đầu khi mount và chạy lại sau mỗi lần update.
* **Khi nào dùng:** Khi bạn muốn một side Effect chạy lại mỗi khi component render.

```js
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState('Aptech');
  console.log(`Greet render, ${name}!`);
  useEffect(() => {
    document.title = `${title}`; // Side-effect!
  }); // <== Không có Dependency
  return (<div>
    <h1>{message}</h1>
    <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
  </div>);
}

```

* **Cảnh báo:** Đây là trường hợp **ít được sử dụng** và rất **nguy hiểm** nếu không cẩn thận, vì nó có thể dễ dàng gây ra **vòng lặp vô hạn (infinite loop)**.

**Ví dụ về vòng lặp vô hạn:**

```jsx
import React, { useState, useEffect } from 'react';

function InfiniteFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Effect này chạy.
    console.log('Fetching data...');
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(apiData => {
        // 2. setData được gọi, state thay đổi.
        setData(apiData); 
      });
    // 3. Vì state thay đổi, component re-render.
    // 4. Vì không có dependency array, effect chạy lại từ bước 1 -> VÒNG LẶP VÔ HẠN!
  }); // <-- Không có mảng phụ thuộc!

  return <div>Data is here!</div>;
}
```

> **Lời khuyên:** Hầu như luôn luôn phải cung cấp mảng phụ thuộc. Nếu bạn muốn chạy effect sau mỗi lần render, hãy tự hỏi tại sao và đảm bảo rằng effect đó không gây ra việc render lại.

### Trường hợp 2: Mảng phụ thuộc rỗng `[]` (Chạy 1 lần duy nhất)

```js
/**
 * Lifecycle - Mounted
 */
useEffect(() => {
   //Callback chỉ chạy trong lần đầu tiên component Render
}, []); // <- dependency là một mảng rỗng
```

Đây là cách an toàn và phổ biến để chạy một effect chỉ một lần duy nhất sau khi component được render lần đầu.

* **Hành vi:** Tương đương `componentDidMount`.
* **Khi nào dùng:** Khi bạn muốn sideEffect chạy 1 lần duy nhất trong lần component render lần đầu tiên.

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

Hoặc ví dụ khi bạn cần lấy dữ liệu từ API trong lần đầu tiên render (Học trong bài sau)

```jsx
import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hàm này chỉ chạy 1 lần duy nhất sau khi component mount
    fetch('https://api.example.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []); // <-- Mảng rỗng! An toàn và hiệu quả.

  return (/* ... */);
}
```

### Trường hợp 3: Có giá trị trong mảng phụ thuộc `[deps]` (Chạy khi `prop/state` thay đổi)

```js
/**
 * Lifecycle - Update
 */
useEffect(() => {
  //Callback chỉ chạy trong lần đầu tiên component Render
  //Và nó chạy lại mỗi khi props, hoặc state thay đổi giá trị
}, [prop, state]);
```

Để chạy lại effect mỗi khi một giá trị cụ thể thay đổi, hãy đặt giá trị đó (có thể là `prop` hoặc `state`) vào trong mảng phụ thuộc.

* **Hành vi:** Tương đương `componentDidUpdate` nhưng có kiểm soát.
* **Khi nào dùng:** Khi bạn muốn sideEffect chạy lần đầu tiên khi component render và chạy lại mỗi khi component có state hoặc props phụ thuộc thay đổi giá trị.

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

Ví dụ: Khi Lấy lại dữ liệu chi tiết khi ID thay đổi, hoặc thực hiện một hành động khi người dùng thay đổi một lựa chọn.

```jsx
import React, { useState, useEffect } from 'react';

function PostDetail({ postId }) { // postId là một prop
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Effect này sẽ chạy lại mỗi khi `postId` thay đổi
    fetch(`https://api.example.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [postId]); // <-- Phụ thuộc vào postId!

  return (/* ... */);
}
```

### Trường hợp 4: Dọn dẹp (Cleanup Function)

Để tránh rò rỉ bộ nhớ, bạn cần "dọn dẹp" một số side effect. Hãy `return` một hàm từ bên trong `useEffect`. Hàm này sẽ tự động được gọi trước khi effect chạy lại lần tiếp theo, hoặc khi component bị gỡ bỏ (unmount).

* **Khi nào dùng:** Hủy bộ đếm thời gian (`setInterval`, `setTimeout`), hủy các kết nối WebSocket, xóa các event listener thủ công.

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Hàm dọn dẹp sẽ được return
    return () => {
      console.log('Dọn dẹp! Hủy bộ đếm thời gian.');
      clearInterval(timerId); // Hủy setInterval khi component unmount
    };
  }, []); // Mảng rỗng -> timer được tạo 1 lần và dọn dẹp 1 lần.

  return <h1>Thời gian: {time} giây</h1>;
}
```

Ví dụ thêm: Tính nằng go Top

```js

const GoTop = () => {
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

    //cleanup this component
    return () => {
      window.removeEventListener('scroll', handleGoTop);
    };
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

export default GoTop;
```

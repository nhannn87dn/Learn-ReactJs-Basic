# Custom Hook

Tự tạo cho bạn một Hook riêng theo nhu cầu

Lấy một ví dụ cần call một API

```js
//App.js

import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

    // Bạn có thể gọi nhiều API một lúc lần lượt từ đây

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

```

Bạn có thể gọi nhiều API một lúc, quá trình đó làm cho code của bạn lặp đi lặp lại nhiều lần một cách giống nhau.

```js
// API 1
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);
// API 2
 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/post")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);
 //...
```

Thay vì đó bạn có thể tạo cho mình một Hook để thực hiện chức năng đó, nó hoạt động như việc bạn tạo ra Function vậy.

Bạn tạo ra một file với tên bắt đầu là use ví dụ như useFetch.js
```js
//useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```

Sau đó trong file App.js bạn chỉ cần gọi ra một cách ngắn gọn.

```js
import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
```

🔥 Lưu ý: 
Có rất nhiều Custom Hook hay ho đã được các Dev chuyên nghiệp tạo ra, bạn có thể search theo nhu cầu sử dụng.

- <https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/>

- <https://proxify.io/articles/5-react-hooks-you-wont-live-without#hook-no-5-usestorage>

- <https://medium.com/@Chris1993/15-useful-custom-react-hooks-for-your-next-web-app-c5902d868f4c>
# Custom Hook

Để tạo một custom hook trong React, bạn có thể sử dụng các hooks hiện có và kết hợp chúng để tạo một hook mới. Dưới đây là một ví dụ về cách tạo một custom hook để quản lý trạng thái đăng nhập đơn giản:

```js
import React, { useState } from 'react';

// Custom hook for managing login state
const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};

const App = () => {
  const { isLoggedIn, login, logout } = useLogin();

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Đăng xuất</button>
      ) : (
        <button onClick={login}>Đăng nhập</button>
      )}
      {isLoggedIn ? <p>Đã đăng nhập</p> : <p>Chưa đăng nhập</p>}
    </div>
  );
};

export default App;

```

***

Để lấy độ rộng của trình duyệt trong React, bạn có thể sử dụng custom hook và kết hợp với hook useState và sự kiện resize của window. Dưới đây là một ví dụ về cách tạo custom hook để lấy độ rộng trình duyệt:


```js
import React, { useEffect, useState } from 'react';

// Custom hook for getting browser width
const useBrowserWidth = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setBrowserWidth(window.innerWidth);
  };

  useEffect(() => {
    // Throttle the resize event to improve performance
    const handleResizeThrottled = () => {
      let timeoutId;
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          handleResize();
        }, 100);
      };
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResizeThrottled());

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResizeThrottled());
    };
  }, []);

  return browserWidth;
};

const App = () => {
  const browserWidth = useBrowserWidth();

  return (
    <div>
      <h1>Độ rộng trình duyệt: {browserWidth}px</h1>
    </div>
  );
};

export default App;

```


Trong ví dụ này, chúng ta đã tạo custom hook có tên là useBrowserWidth, dùng để lấy độ rộng của trình duyệt. Custom hook này sử dụng hook useState để lưu trữ độ rộng trình duyệt và sử dụng hook useEffect để đăng ký sự kiện resize của window và cập nhật độ rộng khi sự kiện này xảy ra.

Chúng ta cũng sử dụng kỹ thuật "throttle" để giới hạn tần suất cập nhật độ rộng và giảm tải cho sự kiện resize, giúp tối ưu hiệu suất của ứng dụng.


***



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
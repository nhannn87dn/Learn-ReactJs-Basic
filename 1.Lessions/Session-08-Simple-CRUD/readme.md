# Simple CRUD

## ⭐ Fake API

Sử dụng công cụ Fake API để luyện tập call API trong React

- https://jsonplaceholder.typicode.com

- https://fakeapi.platzi.com/en/about/introduction/

- https://commercejs.com/docs/

![call](call-api.png)

## ⭐ HTTP Request ?

- Các methods: GET, POST, PUT, PATH, DELETE
- Paramters, QueryString, Body String

## ⭐ HTTP Response ?

- Response Result
- Http Status Code

## ⭐ Làm quen công cụ TEST API

Sử dụng một số API Public phổ biến để test

- POST MAN
- REST Client

## ⭐ Tạo ứng dụng CURD đơn giản

![call](crud.png)

Sử dụng Fake API: https://fakeapi.platzi.com/en/rest/users/#get-all-users

Tech Tips:

- fetch, axios, ReactQuery
- AntDesign

---

### 💥Cách gọi một API trong React

#### 🔹 Sử dụng `fetch()`

Cú pháp:

```js
fetch(url, options);
```

- url: là địa chỉ API
- options: là một object tùy chọn, có thể không truyền

Xem chi tiết <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

Phương thức GET: Thường dùng để lấy danh sách

```js
import { useState, useEffect } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        // handle success
        console.log(data);
        //lấy data gán cho State
        setUsers(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <tr>
          <th>#ID</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {users.length > 0 && users.map((user) => {
          return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.avatar}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>Edit - Delete</td>
          </tr>
          )
        })}
      </table>
    </div>
  );
};

export default UserList;
```

---

#### 🔹 Sử dụng Axios

Cài đặt thư viện axios

```bash
npm i axios
yarn add axios
```

Doc: <https://axios-http.com/docs/intro>

Cú pháp của axios gọn gơn fetch một chút

😍 **useEffect CALL API**

Phương thức GET: Thường dùng để lấy danh sách

```js
import { useState, useEffect } from "react";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((data) => {
        // handle success
        console.log(data);
        //lấy data gán cho State
        setUsers(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <tr>
          <th>#ID</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.avatar}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>Edit - Delete</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
export default UserList;
```

Tôi Ưu thêm cho đúng UI-UX

- Thêm `Loading` cho component trên để biết là quá trình call lấy dữ liệu đang diễn ra.
- Bắt báo lỗi nếu có

---

**Phương thức POST**

Phương thức này thường dùng để tạo mới

```js
    const handleSubmit = async ()=> {
        try {
            let url = 'https://jsonplaceholder.typicode.com/posts';

            let payloads = {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
            };
            const options = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            await axios
            .post(url, payloads,options)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
        }
        .catch(function (error) {
            console.log(error);
        });
    }

```

Trong ví dụ POST này, thì call API thực hiện khi hành động Submit diễn ra cho nên chúng ta không cần đặt nó trong useEffect

---

**Phương thức PUT**

Phương thức này thường dùng để cập nhật thông tin

```js
const handleUpdate = async (data, id) => {
  try {
    const url = `https://api.escuelajs.co/api/v1/users/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    reset();
  } catch (error) {
    console.log(error);
  }
};
```

---

**Phương thức DELETE**

Phương thức này thường dùng để XÓA

```js
const handleDelete = async (id: number) => {
  try {
    const url = `https://api.escuelajs.co/api/v1/users/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    reset();
  } catch (error) {
    console.log(error);
  }
};
```

Ngoài ra còn có thêm một thư viện rất mạnh khác nữa là React Query

---

## ⭐ Các trạng thái trong Call API

Khi gọi API fetch để tương tác với máy chủ và nhận dữ liệu, có thể xác định các trạng thái khác nhau của quá trình call API. Dưới đây là một số trạng thái phổ biến khi sử dụng API fetch trong React:

1. Chưa gửi yêu cầu (Pending):

Quá trình gửi yêu cầu API fetch chưa được bắt đầu hoặc đang chờ.
Trạng thái ban đầu trước khi gửi yêu cầu.

2. Đang gửi yêu cầu (Loading):

Yêu cầu API fetch đang được gửi đi và đang chờ phản hồi từ máy chủ.
Thường sử dụng để hiển thị một biểu tượng tải trong quá trình gửi yêu cầu.

3. Thành công (Success):

Yêu cầu API fetch đã được xử lý thành công và trả về kết quả dữ liệu.
Dữ liệu từ phản hồi API có sẵn và có thể được sử dụng để cập nhật giao diện người dùng.

4. Lỗi (Error):

Xảy ra lỗi trong quá trình gửi yêu cầu hoặc xử lý yêu cầu API fetch.
Thông báo lỗi có thể hiển thị hoặc xử lý lỗi để đưa ra các biện pháp khắc phục.

Để tăng trải nghiệm người dùng UX, bạn phải làm cho UI thể hiện các trạng thái đó trong 1 chu kỳ call API

## ⭐ API with Authentication

Call API có sử dụng phương thức xác thực `Authorization`: `basic token`, `Bearer token`

Thực hành với: <https://fakeapi.platzi.com/en/rest/auth-jwt>

### Authentication Với Fetch

```js
const url = `https://api.escuelajs.co/api/v1/auth/profile`;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: "Bearer {your access token}", //Thay Thế Token vào
  },
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // handle success
    console.log(data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
```

### Authentication Với Axios

```js
const url = `https://api.escuelajs.co/api/v1/auth/profile`;
const options = {
  headers: {
    Authorization: "Bearer {your access token}", //Thay Thế Token vào
    //Authorization: "Basic {your access token}", //Thay Thế Token vào
  },
};
axios
  .get(url)
  .then((data) => {
    // handle success
    console.log(data);
    //lấy data gán cho State
    setUsers(data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
```

## ⭐ Tự tạo Fake API

Sử dụng [MockAPI](https://mockapi.io) để tạo REST API fake

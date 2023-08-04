# Giao tiếp giữa React với API Backend

## ⭐ RESTful API Là gì ?

RESTful API là một tiêu chuẩn dùng trong việc thiết kế các API cho các ứng dụng web để quản lý các resource. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến ngày nay để cho các ứng dụng (web, mobile…) khác nhau giao tiếp với nhau.

API có thể trả về dữ liệu mà bạn cần cho ứng dụng của mình ở những kiểu dữ liệu phổ biến như JSON hay XML.

## ⭐ Fake API

Sử dụng công cụ Fake API để luyện tập call API trong React


* https://jsonplaceholder.typicode.com

* https://fakeapi.platzi.com/en/rest/introduction

## ⭐ Làm quen công cụ TEST API

Sử dụng một số API Public phổ biến để test

- POST MAN
- REST Client


## ⭐ Promises & Async / await

> Xử lý bất động bộ trong Javascript

Trước tiên ta di tìm hiểu VÌ SAO LẠI CẦN ĐẾN Promises thông qua một ví dụ:

Tìm một người tên là 'john' có trong Database

```js
//Mô phỏng trả về một mảng users từ Database
function getUsers() {
  return [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' },
  ];
}
// Định nghĩa hàm Tìm user có tên john
function findUser(username) {
  const users = getUsers(); 
  const user = users.find((user) => user.username === username);
  return user;
}
//Gọi hàm 
console.log(findUser('john'));

//Kết quả
{ username: 'john', email: 'john@test.com' }

```
Chúng ta thấy chưa có điều gì xảy ra với ví dụ trên. Vì `getUsers()` return về mảng user quá nhanh, để bạn có thể sử dụng find tìm.

Nhưng trong thực tế khi lấy mảng users từ Database nó phải mất một thời gian nhất định.

Để mô phỏng nó tốn thời gian để lấy dữ liệu xong mới trả về mình sửa `getUsers()` lại như sau:

```js
function getUsers() {
  let users = [];
  //Sử dụng setTimeout để Delay 3 giây
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 3000);
  return users;
}

console.log(findUser('john'));

//Output
undefined
```

Giải thích:

- Bản chất các tiến trình của Javascript là đồng bộ
- Tại hàm `findUser`, lấy mảng users và tìm user xảy ra đồng thời. Chứ nó không đợi tìm được users rồi mới đi tìm kiếm người tên `john` 
- Chính vì vậy kết quả là `undefined`

**💘 KHẮC PHỤC**

- Sử dụng [Callback](callback.html) để xử lý bất động bộ ở trên. Tuy nhiên cách này có thể gây ra một vấn đề gọi là `Callback Hell`
- Sử dụng Promises:  [Xem ở đây](Promises.md)
- Sử dụng Async / await ES8


## ⭐ Call API trong ReactJS 

###  Sử dụng `fetch()`

Cú pháp: 

```js
fetch(url, options) 
```

* url: là địa chỉ API
* options: là một object tùy chọn, có thể không truyền

Xem chi tiết <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>


###  Sử dụng Axios

Cài đặt thư viện axios

```bash
npm i axios
yarn add axios
```

Doc: <https://axios-http.com/docs/intro>

Cú pháp của axios gọn gơn fetch một chút

Phương thức GET

```js
const [posts, setPost] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.data);

                if(data){
                    setPost(data);
                }
            }
           
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        fetchData();
    },[]);
```

Phương thức POST

```js
    const handleSubmit = async ()=> {
        try {
            let url = 'https://jsonplaceholder.typicode.com/posts';
            
            let payloads = {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
            };
            
            await axios
            .post(url, payloads)
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

Ngoài ra còn có thêm một thư viện rất mạnh khác nữa là React Query

###  Sử dụng React Query

Trang web chính thức: <https://tanstack.com/query/latest>

#### Bước 1 - Cài đặt

```bash
npm i @tanstack/react-query
# or
yarn add @tanstack/react-query
```
Đề xuất nên cài thêm ESlint để kiểm soát lỗi

```bash
npm i -D @tanstack/eslint-plugin-query
# or
yarn add -D @tanstack/eslint-plugin-query
```

#### Bước 2 - Khởi tạo React Query Provider

Trước tiên, bạn cần đặt QueryClientProvider ở cấp cao nhất của ứng dụng React để sử dụng React Query.

```js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Các thành phần con của bạn ở đây */}
    </QueryClientProvider>
  );
}

export default App;

```

#### Bước 3- Sử dụng React Query Hooks

React Query cung cấp một số hooks để bạn có thể dễ dàng gọi và quản lý các request mạng. 

`useQuery` và `useMutation` là hai hooks trong React Query được sử dụng để quản lý hai khía cạnh khác nhau của việc làm việc với dữ liệu trong ứng dụng:

1. `useQuery`:
   - Sử dụng `useQuery` khi bạn muốn lấy dữ liệu từ máy chủ (server) và hiển thị nó trong giao diện người dùng.
   - Hook này sử dụng cho các yêu cầu mạng chỉ đọc (read-only) như GET.
   - Khi bạn sử dụng `useQuery`, React Query sẽ quản lý việc caching dữ liệu, giúp giảm thiểu việc gửi các yêu cầu mạng trùng lặp và tối ưu hiệu suất ứng dụng.
   - Các trạng thái của `useQuery` bao gồm `isLoading` (đang tải), `isError` (xảy ra lỗi), `isSuccess` (thành công) để bạn có thể xử lý tương ứng với từng trạng thái trong giao diện.

2. `useMutation`:
   - Sử dụng `useMutation` khi bạn muốn thực hiện các thay đổi dữ liệu trên máy chủ (server) như thêm mới (create), cập nhật (update) hoặc xóa (delete).
   - Hook này sử dụng cho các yêu cầu mạng viết (write) như POST, PUT, PATCH, DELETE.
   - `useMutation` giúp bạn gọi các yêu cầu mạng mutation một cách dễ dàng và quản lý các trạng thái của mutation (loading, success, error) để bạn có thể cập nhật giao diện người dùng phản hồi cho người dùng khi thực hiện các thay đổi dữ liệu.
   - Ngoài ra, `useMutation` cung cấp các hàm như `reset`, `revert`, `onSuccess`, `onError`, `onSettled` giúp bạn tùy chỉnh hành vi sau khi thực hiện mutation thành công, lỗi hoặc khi kết thúc (settled).


Ví dụ về sử dụng useQuery:

```js
import React from 'react';
import { useQuery } from 'react-query';

function TotoComponent() {
    //Call API lấy data, kèm các trạng thái liên quan
  const { data, isLoading, error } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
      response.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

```
Ví dụ về sử dụng useMutation:

```jsx
import React from 'react';
import { useMutation } from 'react-query';

function AddTodo() {
  const addTodoMutation = useMutation((newTodo) =>
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then((response) => response.json())
  );

  const handleAddTodo = () => {
    addTodoMutation.mutate({ title: 'New Todo', completed: false });
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      {addTodoMutation.isLoading && <span>Adding todo...</span>}
      {addTodoMutation.isSuccess && <span>Todo added successfully!</span>}
      {addTodoMutation.isError && <span>Failed to add todo.</span>}
    </div>
  );
}
```

Trong ngữ cảnh của React Query, "mutations" là một khái niệm liên quan đến việc thay đổi dữ liệu trên máy chủ (server-side data changes) thông qua các yêu cầu HTTP như POST, PUT, PATCH hoặc DELETE. Mutations giúp bạn thực hiện các thao tác tạo mới (create), cập nhật (update), hoặc xóa (delete) dữ liệu.

Trong React Query, hook `useMutation` được cung cấp để thực hiện các yêu cầu mutations và quản lý kết quả của chúng. Nó giúp bạn dễ dàng gọi và xử lý các thay đổi dữ liệu một cách tự động và hiệu quả.

Một số điểm chính liên quan đến `useMutation`:

1. Cú pháp:
   ```jsx
   const mutation = useMutation(mutateFunction, options);
   ```

2. `mutateFunction`: Đây là một hàm gọi API để thực hiện mutation. Nó có thể là một hàm bất đồng bộ trả về một Promise hoặc một hàm đồng bộ. Nếu hàm này thành công, bạn nên trả về dữ liệu đã bị thay đổi (ví dụ: thông tin mới của bản ghi) để React Query cập nhật lại cache.

3. `options`: Đây là một đối tượng chứa các tùy chọn cấu hình cho mutation, bao gồm `onSuccess`, `onError`, `onSettled`, v.v. Điều này cho phép bạn điều chỉnh hành vi của hook khi mutation thành công, thất bại hoặc khi nó kết thúc (settled).

4. Các hàm có sẵn của `useMutation`:

   - `mutation.mutate(variables?)`: Gọi hàm mutateFunction và thực hiện mutation. Bạn có thể truyền các biến (variables) cần thiết vào đây, tùy thuộc vào hàm mutateFunction của bạn.

   - `mutation.isLoading`: Một biến đánh dấu xem mutation đang trong quá trình loading hay không.

   - `mutation.isSuccess`: Một biến đánh dấu xem mutation đã hoàn thành thành công hay không.

   - `mutation.isError`: Một biến đánh dấu xem có xảy ra lỗi trong quá trình mutation hay không.

   - `mutation.reset()`: Đặt lại trạng thái của mutation về ban đầu.

   - `mutation.revert()`: Đảo ngược kết quả mutation trở lại trạng thái ban đầu trước khi thực hiện mutation.

   - `mutation.onSuccess(callback)`, `mutation.onError(callback)`, `mutation.onSettled(callback)`: Đăng ký các callback để xử lý khi mutation thành công, lỗi hoặc kết thúc (settled).



Trong ví dụ này, khi người dùng nhấn vào nút "Add Todo", `addTodoMutation.mutate()` sẽ được gọi và thực hiện mutation bằng cách gửi yêu cầu POST tới máy chủ. Trạng thái của mutation sẽ được theo dõi và hiển thị thông tin tương ứng cho người dùng (ví dụ: "Adding todo...", "Todo added successfully!", "Failed to add todo.").

Như vậy, cùng với `useQuery`, `useMutation` là một trong những hooks quan trọng của React Query để quản lý việc fetching và thay đổi dữ liệu trong ứng dụng React một cách dễ dàng và mạnh mẽ.


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

là một hình thức bảo mật được sử dụng trong quá trình gửi và nhận dữ liệu từ một API (Application Programming Interface). Khi một API yêu cầu xác thực, người dùng hoặc ứng dụng cần cung cấp thông tin đăng nhập hoặc mã xác thực để được phép truy cập và sử dụng các tài nguyên hoặc dịch vụ của API.

Quá trình xác thực trong API giúp bảo vệ dữ liệu và đảm bảo rằng chỉ những người dùng hoặc ứng dụng hợp lệ mới có thể truy cập và sử dụng các tài nguyên của API.

Thực hành với: <https://fakeapi.platzi.com/en/rest/auth-jwt>

## ⭐ Tự tạo Fake API

Sử dụng [MockAPI](https://mockapi.io) để tạo REST API fake




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

Phương thức GET

```js
const [posts, setPost] = useState([]);
useEffect(()=>{
    const fetchData = async () => {
        try{
            let url = 'https://jsonplaceholder.typicode.com/posts';

            //Nếu là GET thì có thể không cần để options
            let options = {
                method: 'GET'
            }
            //await để nó trả về kết quả rồi mới chạy tiếp dòng bên dưới
            const response = await fetch(url)
            
            let result = await response.json();
            //Bắt lỗi 404
            if(!response.ok) {
                const error = new Error('An Error Occured');
                throw error;
            }

            setPost(result);
        }.catch(function (error) {
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

        //Dữ liệu cần để gọi API
        let payload = {
                title: 'foo',
                body: 'bar',
                userId: 1,
        };
        
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload); //convert sang json string

        const response = await fetch(url, options);

        let result = await response.json();

        if(!response.ok) {
            const error = new Error('An Error Occured');
            throw error;
        }

        console.log(result);
    }
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}
```

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

Doc: <https://www.npmjs.com/package/react-query>


## ⭐ Render thành giao diện UI

Dữ liệu sau khi lấy được qua API, tùy vào mỗi hoàn cảnh mà bạn có thể render ra thành UI

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
# Networking

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

Phương thức GET

```js
const [posts, setPost] = useState([]);
useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            
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
        
        const options = {
            
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
        });

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


## ⭐ Tự tạo Fake API

Sử dụng [MockAPI](https://mockapi.io) để tạo REST API fake
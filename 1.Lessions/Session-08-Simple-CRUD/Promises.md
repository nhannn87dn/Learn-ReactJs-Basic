# Promise

Trong JavaScript, Promise là một cơ chế xử lý bất đồng bộ (asynchronous) để điều khiển luồng thực thi và xử lý kết quả của các tác vụ không đồng bộ. Promise đại diện cho một giá trị chưa được xác định trong tương lai và cho phép bạn thực hiện các xử lý tiếp theo sau khi tác vụ không đồng bộ hoàn thành thành công hoặc thất bại.

Giải thích cách sử dụng Promise:

1. Tạo một Promise: Để tạo một Promise, bạn sử dụng từ khóa `new Promise()` và truyền một hàm khởi tạo như tham số. Hàm khởi tạo này nhận hai tham số là `resolve` và `reject`, được sử dụng để xác định kết quả của Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Xử lý logic bất đồng bộ
  //Trạng thái lúc này: pending
  
  const result = true;
  
  if (result) {/* Hoàn thành thành công == fulfilled */
    resolve(value); // Giải quyết Promise với giá trị thành công
  } else {
    reject(error); // Từ chối Promise và trả về lỗi == rejected
  }
});

```

2. Xử lý kết quả của Promise: Bạn có thể sử dụng các phương thức `.then()` và `.catch()` để xử lý kết quả của Promise.

```js

myPromise
  .then((value) => {
    // Xử lý giá trị thành công
  })
  .catch((error) => {
    // Xử lý lỗi
  });
```
- Phương thức `.then()` được sử dụng để đăng ký một hàm callback để xử lý kết quả thành công của Promise. Đối số của hàm callback là giá trị được trả về từ `resolve()`.


- Phương thức `.catch()` được sử dụng để đăng ký một hàm callback để xử lý lỗi hoặc thất bại của Promise. Đối số của hàm callback là giá trị được truyền từ `reject()`.


3. Trạng thái của Promise: Promise có ba trạng thái: "pending" (đang chờ), "fulfilled" (hoàn thành) và "rejected" (bị từ chối). Khi một Promise được tạo, nó bắt đầu ở trạng thái "pending". Khi xử lý thành công, Promise chuyển sang trạng thái "fulfilled" và gọi hàm callback được đăng ký bằng `.then()`. Trong trường hợp xảy ra lỗi hoặc không thành công, Promise chuyển sang trạng thái "rejected" và gọi hàm callback được đăng ký bằng `.catch()`.


Ví dụ:

```js
const isSuccess = true;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
      if (isSuccess) {
        resolve(users); // Promise thành công
      } else {
        reject('Lỗi: Không thể tải dữ liệu'); // Promise thất bại
      }
    }, 2000);
  });
};

getUsers()
  .then((data) => {
    console.log(data); // Xử lý kết quả thành công
  })
  .catch((error) => {
    console.log(error); // Xử lý lỗi
  })
  .finally(() => {
    console.log("finally Done !");
});
```



Promise có các phương thức để xử lý kết quả khi nó được giải quyết hoặc từ chối. Các phương thức quan trọng nhất là:

- .then(): Được sử dụng để xử lý kết quả thành công của một Promise.
- .catch(): Được sử dụng để xử lý lỗi hoặc trạng thái từ chối của một Promise.
- .finally(): Được sử dụng để thực hiện các công việc sau khi một Promise đã hoàn thành bất kể kết quả là thành công hay thất bại.


Dưới đây là ví dụ đã được chuyển thành Promise:


```js
const isSuccess = true;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
      if (isSuccess) {
        resolve(users); // Promise thành công
      } else {
        reject('Lỗi: Không thể tải dữ liệu'); // Promise thất bại
      }
    }, 2000);
  });
};

function findUser(username) {
  return getUsers()
    .then((users) => {
      const user = users.find((user) => user.username === username);
      return user;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
/*
  findUser return về một Promise nên bản thân nó biến thành một Promise.
  Vì vậy bạn có thể sử dụng then, catch
*/

findUser('john')
.then((user) => {
    console.log(user);
})
.catch((error) => {
    console.error('Error:', error);
});
//Kết quả
{ username: 'john', email: 'john@test.com' }
```


Trong đoạn mã trên:

1. Hàm getUsers() trả về một Promise và sử dụng resolve(users) để trả về mảng users sau khi tác vụ không đồng bộ hoàn thành.

2. Trong hàm findUser(username), chúng ta gọi getUsers() và sử dụng .then() để xử lý kết quả trả về từ Promise. Trong hàm callback của .then(), chúng ta tìm user có tên tương ứng và trả về user đó.

3. Cuối cùng, chúng ta gọi hàm findUser('john') và sử dụng .then() để xử lý user được trả về từ Promise. Nếu có lỗi xảy ra, chúng ta sử dụng .catch() để xử lý và hiển thị thông báo lỗi.

Với việc sử dụng Promise, chúng ta có thể xử lý các tác vụ không đồng bộ một cách tuần tự và dễ đọc hơn bằng cách sử dụng .then() và .catch() để xử lý kết quả hoặc lỗi.
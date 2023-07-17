# Promises

Promise là một đối tượng trong JavaScript được sử dụng để xử lý các tác vụ không đồng bộ và các hoạt động yêu cầu thời gian xử lý dài. Nó giúp xử lý các tác vụ không đồng bộ một cách dễ đọc, dễ hiểu và dễ quản lý.

Một Promise có thể có ba trạng thái chính:

- Pending: Trạng thái ban đầu khi một Promise được tạo. Promise đang chờ để được giải quyết (resolve) hoặc từ chối (reject).

- Fulfilled: Trạng thái khi một Promise được giải quyết thành công. Điều kiện hoặc giá trị đã được trả về thành công.

- Rejected: Trạng thái khi một Promise bị từ chối. Điều kiện hoặc giá trị đã bị từ chối và không thực hiện thành công.

## Cách Tạo một Promise

```js
const promise = new Promise((resolve, reject) => {
  // Logic xử lý ở đây
  // ...

  // Trả về trạng thái ở đây: 
  // tồn tại hoặc ko | true/false
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

```

Promise có đối số là một arrow function, có 2 tham số

- resolve: đại diện cho trạng thái thành công `fulfilled` trả về một `value`
- reject: đại diện cho trạng thái thất bại `rejected` trả về `error`


```js
let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}
// Hàm này hứng kết quả trả về từ trạng thái resolve
function onFulfilled(users) {
  console.log(users);
}
// Hàm này hứng kết quả trả về từ trạng thái reject
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);

```

Promise có các phương thức để xử lý kết quả khi nó được giải quyết hoặc từ chối. Các phương thức quan trọng nhất là:

- .then(): Được sử dụng để xử lý kết quả thành công của một Promise.
- .catch(): Được sử dụng để xử lý lỗi hoặc trạng thái từ chối của một Promise.
- .finally(): Được sử dụng để thực hiện các công việc sau khi một Promise đã hoàn thành bất kể kết quả là thành công hay thất bại.


Hoặc bạn sử dụng `catch()` để bắt lỗi

```js
const promise = getUsers();

promise
//Thành công thì lọt vào then
.then((users) => {
    console.log(users);
})
// Thất bại thì lọt vào catch
.catch((error) => {
    console.log(error);
});
```

Sử dụng với finally


```js
const promise = getUsers();

promise
.then((users) => {
    //Thành công thì lọt vào then
    console.log(users);
})
.catch((error) => {
    // Thất bại thì lọt vào catch
    console.log(error);
})
.finally(() => {
  console.log('Hoàn thành xử lý Promise');
});

```


Dưới đây là ví dụ đã được chuyển thành Promise:


```js
function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
      resolve(users);
    }, 2000);
  });
}

function findUser(username) {
  return getUsers().then((users) => {
    const user = users.find((user) => user.username === username);
    return user;
  });
}

findUser('john').then((user) => {
  console.log(user);
});


```


rong ví dụ trên, chúng ta đã sử dụng Promise để làm cho hàm getUsers trả về một Promise thay vì một mảng trực tiếp. Trong Promise này, chúng ta sử dụng setTimeout để giả lập việc truy xuất dữ liệu từ cơ sở dữ liệu trong 2 giây.

Sau đó, chúng ta đã sử dụng phương thức .then() để xử lý kết quả của hàm getUsers và tìm kiếm người dùng với tên đã chỉ định trong hàm findUser. Kết quả cuối cùng là một Promise, nên chúng ta có thể tiếp tục sử dụng phương thức .then() để truy cập và in ra người dùng tìm thấy.

Chúng ta có thể gọi findUser với tên người dùng khác và xử lý kết quả bằng cách sử dụng phương thức .then() trong các chuỗi Promise liên tiếp.
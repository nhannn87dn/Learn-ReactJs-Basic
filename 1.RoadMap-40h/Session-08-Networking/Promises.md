# Promises

## Tạo một Promise

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

Hoặc bạn sử dụng `catch()` để bắt lỗi

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


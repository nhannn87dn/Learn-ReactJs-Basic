# Async / Await là gì?

Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API. Trong đó:


- Async - khai báo một hàm bất đồng bộ
    ```js
    async function someName(){...}
    ```

  - Tự động biến đổi một hàm thông thường thành một Promise.
  - Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
  - Async cho phép sử dụng Await.
- Await - tạm dừng việc thực hiện các hàm async
    ```js
    const result = await someAsyncCall ()
    ```

  - Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
  - Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
  - Await chỉ có thể được sử dụng bên trong các function async.


## Khi nào thì nên dùng Async / Await ?

Dùng khi tác vụ tiếp theo CẦN đợi kết quả xử lý từ tác vụ trước nó (Mang tính phụ thuộc)

Ngoài ra bạn không nên dùng nó để code trở nên phức tạp không cần thiết.

## Ví dụ

Chúng ta làm lại ví dụ cũ bằng async/await

```js
//Mô phỏng trả về một mảng users từ Database

const getUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    const users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
    resolve(users); // Trả về mảng users
  }, 3000);
});
// Thêm async ở trước từ khóa function
async function findUser(username) {
    //thêm awai đứng trước hàm getUsers 
    //để biểu hàm này chờ lâý được kết quả mới chạy tiếp
  const users =  await getUsers(); 
  /* dựa trên kết quả lấy được, đi tìm user có tên */
  const user = users.find((user) => user.username === username);
  return user;
}
//Gọi hàm 

findUser('john')
.then((user) =>console.log(user))

//Kết quả
{ username: 'john', email: 'john@test.com' }
```

==> Đơn giản hơn xài Promise


## Vậy khi có Async / Await có làm cho Promises lỗi thời?

Không hoàn toàn. Khi làm việc với Async / Await, thật ra chúng ta vẫn đang sử dụng ngầm Promises. Vì thế, kể cả khi đang sử dụng Async / Await cần một sự hiểu biết tốt về Promises sẽ rất tốt cho chúng ta.

Ngoài ra, có những trường hợp mà Async / Await không sử dụng được và chúng ta phải sử dụng Promises. Ví dụ như khi chúng ta cần gọi nhiều thao tác bất đồng bộ và chờ cho tất cả chúng kết thúc. Nếu chúng ta thử và làm điều này với async và await, Điều gì sẽ xảy ra: Hãy xem ví dụ dưới đây các bạn sẽ thấy

```js
async  function  getABC () {
    let A = await getValueA(); // getValueA takes 2 second to finish
    let B = await getValueB(); // getValueB takes 4 second to finish
    let C = await getValueC(); // getValueC takes 3 second to finish

    return A*B*C;
}
```

Mỗi lần gọi tới hàm await sẽ đợi cho đến khi hàm await trước đó kết thúc. Vì các wait sẽ đợi và thực hiện tuần tự từng cái một, toàn bộ chức năng sẽ mất 9 giây để thực hiện xong hàm từ đầu đến cuối (2 + 4 + 3).

Đây không phải là một giải pháp tối ưu vì A, B và C không phụ thuộc vào nhau, chúng ta không cần biết giá trị của A trước khi chúng ta có được B. Vì vậy, chúng ta có thể lấy chúng cùng một lúc và thời gian chờ đợi sẽ được giảm bớt đi.

Trong trường hợp như thế này, sử dụng Promise sẽ thích hợp hơn. Để gửi tất cả các yêu cầu cùng lúc, chúng ta sử dụng Promise.all(). 

Việc sử dụng Promise.all() sẽ đảm bảo chúng ta có tất cả các kết quả trước khi tiếp tục thực thi code, nhưng việc gọi đến các hàm bất đồng bộ sẽ được chạy song song mà không phải tuần tự từng cái một.

```js
async  function  getABC () {
    // Promise.all() allows us to send all requests at the same time. 
    let results = await Promise.all([ getValueA, getValueB, getValueC ]); 

    return results.reduce((total,value) => total * value);
}
```

Bằng cách này, thời gian thực thi hàm sẽ mất it hơn. hàm getValueA và getValueC sẽ thực hiện xong trước khi getValueB xong. Thay vì phải mất 9 giây để chờ từng hàm trả về giá trị như trên, chúng ta sẽ chỉ mất 4 giây để chờ cả 3 hàm trả về giá trị.

## Xử lý lỗi trong Async / Await

Một điều tuyệt vời khác về Async / Await là nó cho phép chúng ta bắt các lỗi không mong đợi bằng cách sử dụng try / catch. Chúng ta chỉ cần để các await call của chúng ta vào trong khối try/catch như sau:

```js
async function doSomethingAsync(){
    try {
        // This async call may fail.
        let result = await someAsyncCall();
    }
    catch(error) {
        // If it does we will catch the error here.
    }  
}
```

Mệnh đề catch sẽ xử lý các lỗi gây ra bởi các hàm bất đồng bộ hoặc bất kỳ lỗi nào chúng ta có thể đã viết bên trong khối try.

Trong một vài tình huống, chúng ta cũng có thể bắt các lỗi khi đang thực hiện function async. Vì tất cả các hàm async đều trả về Promises, chúng ta chỉ cần gọi thêm hàm `.catch()` khi gọi chúng.
```js
    // Async function without a try/catch block.
    async function doSomethingAsync(){
        // This async call may fail.
        let result = await someAsyncCall();
        return result;  
    }

    // We catch the error upon calling the function.
    doSomethingAsync().
        .then(successHandler)
        .catch(errorHandler);
```
Dựa vào các tình huống cụ thể, chúng ta sẽ sử dụng try/catch hoặc `.catch()` để bắt và xử lý lỗi. Tuy nhiên, chúng ta không nên sử dụng cả 2 cùng một lúc vì nó có thể dẫn đến các vấn đề không mong muốn.
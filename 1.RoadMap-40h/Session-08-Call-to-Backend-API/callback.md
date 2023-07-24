# Callback in JavaScript

Trong JavaScript, callback là một hàm được truyền vào như một đối số cho một hàm khác và được gọi lại sau khi công việc đã hoàn thành hoặc một sự kiện xảy ra. Callbacks thường được sử dụng để thực hiện các tác vụ không đồng bộ hoặc xử lý các sự kiện trong ngữ cảnh không đồng bộ.

##  callback trong JavaScript:

```js
function getUsers(callback) {
  setTimeout(function() {
    const users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
    callback(users);
  }, 2000);
}

function findUser(username, callback) {
  getUsers(function(users) {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', function(user) {
  console.log(user);
});


```

Trong phiên bản callback này, hàm getUsers đã được chuyển thành một hàm có callback. Thay vì trả về danh sách người dùng trực tiếp, hàm này sẽ chờ 2 giây và sau đó gọi lại callback với danh sách người dùng.

Hàm findUser cũng đã được cập nhật để sử dụng hàm getUsers với callback. Khi nhận được danh sách người dùng, nó tìm người dùng với tên đã chỉ định và sau đó gọi lại callback với người dùng tìm thấy.

Cuối cùng, chúng ta gọi hàm findUser với tên người dùng "john" và truyền một hàm callback để xử lý người dùng tìm thấy. Trong ví dụ này, chúng ta chỉ đơn giản là in ra người dùng đã tìm thấy lên console.

## Callback hell

Callback hell (địa ngục callback) là một hiện tượng xảy ra khi có quá nhiều các hàm callback lồng nhau trong JavaScript, dẫn đến việc mã trở nên khó đọc, khó hiểu và khó bảo trì. 

Đây là một ví dụ về hiện tượng callback hell:

Hiển thị tổng giá trị đơn hàng của một User đã mua

```js
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getProducts(orders, function(products) {
      calculateTotal(products, function(total) {
        displayTotal(total, function() {
          // Xử lý tiếp theo...
        });
      });
    });
  });
});

```


Trong ví dụ trên, chúng ta có các hàm callback lồng nhau để thực hiện một quá trình tương tác dữ liệu thực tế. Đầu tiên, chúng ta lấy thông tin người dùng từ một userId. Sau đó, chúng ta lấy danh sách đơn hàng (orders) của người dùng đó. Tiếp theo, chúng ta lấy danh sách sản phẩm (products) từ các đơn hàng. Sau đó, chúng ta tính toán tổng số tiền (total) của các sản phẩm. Cuối cùng, chúng ta hiển thị tổng số tiền đó lên giao diện.

Như bạn có thể thấy, việc có quá nhiều hàm callback lồng nhau làm cho mã trở nên phức tạp và khó đọc. Luồng logic của chương trình không rõ ràng và việc bảo trì hoặc thêm mới chức năng sẽ trở nên phức tạp.

Để tránh callback hell, một trong những giải pháp phổ biến là sử dụng Promise hoặc async/await để xử lý các tác vụ không đồng bộ một cách dễ đọc và dễ hiểu hơn.
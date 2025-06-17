# 📘  Conditional Rendering trong React

## 1. Conditional Rendering là gì?

> **Conditional Rendering** có nghĩa là: **hiển thị giao diện (component hoặc phần tử HTML) theo điều kiện cụ thể**.

Ví dụ:

* Nếu người dùng đã đăng nhập, hiển thị “Chào bạn!”.
* Nếu chưa đăng nhập, hiển thị nút “Đăng nhập”.

> React cho phép bạn điều khiển việc **hiển thị nội dung** tuỳ thuộc vào giá trị `state` hoặc `props`.

---

## 🔥 2. Dùng `if/else` trong component

Cách đơn giản nhất: dùng `if/else` bên trong phần **logic trước return**:

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Chào mừng bạn quay lại!</h1>;
  } else {
    return <h1>Xin chào, khách!</h1>;
  }
}
```

📌 Ưu điểm: dễ đọc, dễ debug.
📌 Nhược điểm: ít linh hoạt trong JSX phức tạp.

---

## 🔥 3. Dùng toán tử `? :` trong JSX

Toán tử điều kiện trong JSX: `điều_kiện ? nếu_đúng : nếu_sai`

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Chào mừng quay lại!' : 'Xin chào, khách!'}</h1>
  );
}
```

📌 Ưu điểm: viết gọn, thích hợp khi chỉ cần trả về 1 phần tử.

---

## 🔥 4. Dùng toán tử `&&` để render khi đúng

Khi bạn **chỉ cần render khi điều kiện đúng**, không cần “else”:

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hộp thư đến</h1>
      {unreadMessages.length > 0 &&
        <p>Bạn có {unreadMessages.length} tin nhắn chưa đọc.</p>
      }
    </div>
  );
}
```

📌 Cẩn thận: `0 && <p>...</p>` sẽ trả về `0`, nên cần kiểm tra kỹ.

---

## 🔥 5. Dùng biến trung gian chứa JSX

Nếu có nhiều điều kiện phức tạp, bạn có thể tạo biến trước khi `return`:

```jsx
function UserStatus({ isOnline }) {
  let statusMessage;

  if (isOnline) {
    statusMessage = <p>Đang hoạt động</p>;
  } else {
    statusMessage = <p>Đã offline</p>;
  }

  return <div>{statusMessage}</div>;
}
```

📌 Giúp **code sạch sẽ hơn** khi có nhiều điều kiện.

---

## 🔥 6. Ẩn/hiện component hoặc phần tử DOM

Bạn có thể **ẩn component** bằng cách:

```jsx
{isVisible && <ComponentName />}
```

Hoặc kết hợp với state:

```jsx
function TogglePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Hiện / Ẩn</button>
      {isOpen && <div>Bảng nội dung đang hiển thị</div>}
    </>
  );
}
```

---

## 🔥 7. Ví dụ thực tế

### 7.1. Chào người dùng đã đăng nhập

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? <p>Chào bạn!</p> : <button>Đăng nhập</button>}
    </div>
  );
}
```

---

### 7.2. Hiện password nếu check “Hiển thị mật khẩu”

```jsx
function PasswordField() {
  const [show, setShow] = useState(false);

  return (
    <>
      <input type={show ? "text" : "password"} />
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        Hiển thị mật khẩu
      </label>
    </>
  );
}
```

---

## 🔥 8. Best Practices

| Nên dùng khi       | Cách làm                 |
| ------------------ | ------------------------ |
| Điều kiện đơn giản | `? :` hoặc `&&`          |
| Điều kiện phức tạp | Dùng `if/else` + biến    |
| Giao diện lớn      | Tách thành component nhỏ |

📌 Gợi ý: Tránh lồng nhiều toán tử `? :` vào nhau → khó đọc.

---

## 🔥 9. Lỗi thường gặp

| ❌ Lỗi thường gặp                     | ✅ Cách khắc phục                           |
| ------------------------------------ | ------------------------------------------ |
| Dùng `0 && <div>` dẫn tới render `0` | Kiểm tra điều kiện kỹ (`!== 0`, `> 0`)     |
| JSX rối do quá nhiều `? :` lồng nhau | Tách ra biến hoặc component riêng          |
| Quên `return` khi dùng `if/else`     | Đảm bảo mỗi nhánh đều `return` một element |

---

## 🔥 10. Kết hợp với State

State thường được dùng để điều khiển điều kiện render. Ví dụ:

```jsx
function AuthControl() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Chào bạn!</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
```

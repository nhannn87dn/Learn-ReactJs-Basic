# 🎯 Xử lý Sự kiện (Event Handling) trong React

## 1. 🧠 Khái niệm Event trong React là gì?

* **Event** (sự kiện) là các hành động mà người dùng thực hiện trên giao diện như: click chuột, nhập bàn phím, di chuyển chuột, gửi form,...
* **Event Handling** là việc xử lý các hành động đó bằng các hàm (event handlers) để tạo tương tác.

👉 Trong React, event được xử lý thông qua **JSX** và sử dụng cú pháp tương tự như HTML nhưng là **camelCase**.

---

## 2. 🆚 So sánh với HTML/JavaScript thuần

| So sánh                 | HTML/JS truyền thống                 | React                            |
| ----------------------- | ------------------------------------ | -------------------------------- |
| Cách gắn sự kiện        | `<button onclick="handleClick()">`   | `<button onClick={handleClick}>` |
| Cách viết hàm           | Trong file script hoặc gắn trực tiếp | Viết trong component             |
| Ngữ pháp tên thuộc tính | chữ thường (onclick)                 | camelCase (onClick, onSubmit)    |

---

## 3. 🧩 Cú pháp xử lý sự kiện trong React

```jsx
function handleClick() {
  alert('Bạn đã bấm nút!');
}

function MyButton() {
  return (
    <button onClick={handleClick}>Bấm tôi!</button>
  );
}
```

* ✅ `onClick` là tên thuộc tính sự kiện.
* ✅ `handleClick` là hàm xử lý.

---

## 4. Các loại sự kiện thường gặp

## 4.1. 🖱️ Các sự kiện chuột (Mouse Events) trong React

| Sự kiện         | Ý nghĩa                    |
| --------------- | -------------------------- |
| `onClick`       | Khi nhấp chuột trái        |
| `onDoubleClick` | Khi nhấp đúp chuột         |
| `onMouseEnter`  | Khi rê chuột vào phần tử   |
| `onMouseLeave`  | Khi chuột rời khỏi phần tử |
| `onMouseDown`   | Khi ấn chuột xuống         |
| `onMouseUp`     | Khi thả chuột ra           |
| `onContextMenu` | Khi nhấp chuột phải        |

### 📌 Ví dụ: Hover chuột để thay đổi màu

```jsx
import { useState } from "react";

function HoverBox() {
  const [color, setColor] = useState('lightblue');

  return (
    <div
      onMouseEnter={() => setColor('lightgreen')}
      onMouseLeave={() => setColor('lightblue')}
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: color,
        textAlign: 'center',
        lineHeight: '100px',
      }}
    >
      Di chuột vào đây
    </div>
  );
}
```

---

## 4.2. ⌨️ Các sự kiện bàn phím (Keyboard Events) trong React

| Sự kiện      | Ý nghĩa                                                |
| ------------ | ------------------------------------------------------ |
| `onKeyDown`  | Khi nhấn xuống một phím bất kỳ                         |
| `onKeyUp`    | Khi thả phím ra                                        |
| `onKeyPress` | (Cũ - deprecated) Chỉ kích hoạt với phím gõ được ký tự |

> 📝 Ghi chú: Nên dùng `onKeyDown` hoặc `onKeyUp` vì `onKeyPress` đang dần bị loại bỏ.

### 📌 Ví dụ: Nhấn Enter để gửi

```jsx
function KeyInput() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert('Bạn đã nhấn Enter!');
    }
  };

  return (
    <input type="text" onKeyDown={handleKeyDown} placeholder="Nhấn Enter thử xem" />
  );
}
```

---

## 4.3. 📎 Tổng hợp thêm các sự kiện khác

| Loại sự kiện | Tên sự kiện               | Mô tả ngắn                |
| ------------ | ------------------------- | ------------------------- |
| Chuột        | `onClick`, `onMouseEnter` | Click, rê chuột           |
| Bàn phím     | `onKeyDown`, `onKeyUp`    | Nhấn phím, thả phím       |
| Form         | `onChange`, `onSubmit`    | Nhập dữ liệu, gửi form    |
| Input        | `onFocus`, `onBlur`       | Focus vào, rời khỏi input |

---

## 5. 📦 Truyền tham số vào hàm xử lý

```jsx
function handleGreet(name) {
  alert(`Xin chào ${name}`);
}

function App() {
  return (
    <button onClick={() => handleGreet('Tomy')}>Greet</button>
  );
}
```

> ⚠️ Lưu ý: **Dùng arrow function** để tránh gọi hàm ngay khi component render.

---

## 6. 🏗️ Event trong Class vs Function Component

| Function Component (Hook)   | Class Component                      |
| --------------------------- | ------------------------------------ |
| Dùng arrow function, Hooks  | Dùng `this` và phải bind phương thức |
| Ngắn gọn, phổ biến hiện nay | Dài hơn, ít dùng cho code mới        |

Ví dụ class component:

```jsx
class MyButton extends React.Component {
  handleClick = () => {
    alert('Clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

---

## 7. ⚠️ Lỗi phổ biến người mới hay gặp

| Lỗi                           | Nguyên nhân                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| Hàm xử lý bị gọi khi render   | Ghi `onClick={handleClick()}` thay vì `onClick={handleClick}` |
| Không dùng camelCase          | Ghi `onclick` thay vì `onClick`                               |
| Không bind `this` trong class | Trong class component quên bind phương thức                   |

---

## 8. ✅ Best Practices

* Đặt tên hàm theo hành động (vd: `handleSubmit`, `handleClick`)
* Tránh viết logic phức tạp trực tiếp trong JSX
* Tách hàm xử lý ra ngoài để dễ bảo trì

---

## 9. 🚀 Phần nâng cao

### 9.1. 🛑 Ngăn hành vi mặc định với `preventDefault()`

Ví dụ: chặn form reload trang khi submit

```jsx
function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đã gửi dữ liệu!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên của bạn" />
      <button type="submit">Gửi</button>
    </form>
  );
}
```

---

### 9.2. ⛔ Dừng lan truyền sự kiện với `stopPropagation()`

```jsx
function Parent() {
  const handleParentClick = () => {
    alert("Parent clicked");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Ngăn sự kiện lan lên parent
    alert("Child clicked");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: 30, backgroundColor: '#eee' }}>
      <button onClick={handleChildClick}>Click child</button>
    </div>
  );
}
```

---

## 10. 📩 Truyền hàm xử lý sự kiện như một Props cho Component con

### 🔍 Tại sao cần truyền hàm xử lý (event handler) từ component cha xuống con?

Trong React:

* **Dữ liệu chỉ truyền từ cha xuống con** (one-way binding).
* Nếu component con cần **kích hoạt một hành động hoặc thay đổi ở component cha** (ví dụ: click nút trong con để thay đổi trạng thái ở cha), thì component cha cần **truyền một hàm xuống con như một prop**.
* Component con không tự thay đổi state của cha được, mà chỉ **gọi lại hàm được truyền xuống**.

✅ Điều này giúp:

* Phân tách rõ ràng **giao diện (UI)** và **logic điều khiển (state/handlers)**.
* Dễ kiểm soát luồng dữ liệu.
* Dễ tái sử dụng component con.

---

### 📌 Ví dụ: Truyền event handler từ cha xuống con

#### 🧩 Component cha

```jsx
function Parent() {
  const handleSayHello = () => {
    alert("Xin chào từ component cha!");
  };

  return <Child onGreet={handleSayHello} />;
}
```

#### 🧩 Component con

```jsx
function Child({ onGreet }) {
  return (
    <button onClick={onGreet}>
      Gửi lời chào từ con
    </button>
  );
}
```

#### ✅ Kết quả

Khi click nút trong component `Child`, hàm `handleSayHello` trong component `Parent` sẽ được gọi.

---

### 📚 Tổng kết lợi ích

| Lý do                                    | Ý nghĩa                                                        |
| ---------------------------------------- | -------------------------------------------------------------- |
| Duy trì nguyên tắc "cha kiểm soát state" | Component cha làm chủ logic, con chỉ hiển thị hoặc gửi yêu cầu |
| Tăng tính tái sử dụng của component con  | Component con không bị ràng buộc logic cụ thể                  |
| Dễ quản lý và test                       | Dễ test độc lập các component và logic                         |

---

### 🛠️ Mở rộng thêm: Truyền **tham số** qua event

```jsx
function Parent() {
  const handleChoose = (color) => {
    alert(`Bạn chọn màu: ${color}`);
  };

  return <ColorButton color="red" onChoose={handleChoose} />;
}

function ColorButton({ color, onChoose }) {
  return (
    <button onClick={() => onChoose(color)}>
      Chọn {color}
    </button>
  );
}
```

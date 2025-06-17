# 🧾 Render List trong React

## 1. Render list là gì?

**Render list** nghĩa là **hiển thị một danh sách các phần tử (dữ liệu)** trong giao diện.
Ví dụ: bạn có một mảng học sinh, bạn muốn hiển thị danh sách đó trên màn hình.

React hỗ trợ việc này bằng cách dùng **hàm `.map()`** để tạo ra **một loạt các phần tử JSX**.

---

## 2. Dùng `.map()` để render list trong React

Cú pháp cơ bản:

```jsx
const students = ['An', 'Bình', 'Chi'];

function StudentList() {
  return (
    <ul>
      {students.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```

📌 **Giải thích**:

* `students.map(...)`: duyệt qua từng phần tử trong mảng.
* Mỗi phần tử được "biến đổi" thành một phần tử JSX `<li>`.
* Tất cả được đưa vào `return`.

---

## 3. Ví dụ đơn giản: render danh sách tên học viên

```jsx
function App() {
  const students = ['Nam', 'Hoa', 'Tùng'];

  return (
    <div>
      <h2>Danh sách học viên:</h2>
      <ul>
        {students.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 4. Tại sao cần `key` khi render list?

React yêu cầu mỗi phần tử trong danh sách **phải có thuộc tính `key` duy nhất**, để:

* Xác định phần tử nào thay đổi, thêm, xoá → **tối ưu hiệu suất**.
* Tránh lỗi giao diện khi list thay đổi.

### ⚠️ Không nên dùng `index` làm `key` nếu có thêm/xoá

**Sai:**

```jsx
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

**Đúng:**

```jsx
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

📌 **Chỉ dùng `index` nếu danh sách tĩnh (không thay đổi).**

---

## 5. Tách mỗi phần tử thành component con

Khi phần tử có logic riêng, nên **tách ra một component** để dễ đọc và tái sử dụng.

```jsx
function StudentItem({ name }) {
  return <li>{name}</li>;
}

function StudentList() {
  const students = ['Nam', 'Hương', 'Linh'];
  return (
    <ul>
      {students.map((s, index) => (
        <StudentItem key={index} name={s} />
      ))}
    </ul>
  );
}
```

📌 Giúp **chia nhỏ logic**, dễ quản lý, dễ test.

---

## 6. Render list từ `state` và cập nhật danh sách

### Ví dụ: ứng dụng Todo List đơn giản

```jsx
function TodoApp() {
  const [tasks, setTasks] = useState(['Học React', 'Đọc sách']);

  function addTask() {
    setTasks([...tasks, 'Công việc mới']);
  }

  function removeTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <button onClick={addTask}>Thêm việc</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

📌 Dùng `...tasks` để tạo mảng mới → tránh thay đổi trực tiếp.

---

## 7. Render list có điều kiện (filter, ẩn/hiện)

```jsx
function FilteredList() {
  const items = [
    { id: 1, name: 'Việc 1', done: true },
    { id: 2, name: 'Việc 2', done: false },
  ];

  return (
    <ul>
      {items
        .filter((item) => item.done)
        .map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  );
}
```

📌 Kết hợp `.filter()` trước `.map()` để chỉ hiển thị phần tử thỏa điều kiện.

Hoặc theo kiểu Conditional Rendering rõ ràng hơn:

```jsx
function FilteredList() {
  const items = [
    { id: 1, name: 'Việc 1', done: true },
    { id: 2, name: 'Việc 2', done: false },
  ];

  return (
    <ul>
      {items.map((item) => 
        item.done && <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );
}

```

---

## 8. Lỗi thường gặp khi render list

| ❌ Lỗi                               | ✅ Cách khắc phục                       |
| ----------------------------------- | -------------------------------------- |
| Quên `key`                          | Luôn thêm `key` vào phần tử danh sách  |
| Dùng `index` khi danh sách thay đổi | Dùng ID duy nhất nếu có                |
| Mutate mảng gốc (`push`, `splice`)  | Dùng `setState([...oldList, newItem])` |

---

## 9. Best Practices

* ✅ Dùng `key` ổn định, duy nhất (không nên là index).
* ✅ Tránh thay đổi trực tiếp mảng cũ – luôn tạo mảng mới.
* ✅ Tách component nếu phần tử list có logic riêng.
* ✅ Luôn kiểm tra điều kiện khi filter/map list lớn.

---

## 10. 🧪 Bài tập thực hành

### 🎯 Bài 1: Todo List đơn giản

* Tạo component `TodoApp` gồm:

  * Input để nhập công việc
  * Nút "Thêm"
  * Danh sách công việc đã thêm
  * Mỗi item có nút "Xoá"

### 🎯 Bài 2: Danh sách sản phẩm

* Tạo mảng `products` chứa `{ id, name, price }`.
* Hiển thị danh sách sản phẩm có giá > 100,000 VNĐ.
* Thêm nút "Ẩn sản phẩm rẻ tiền".

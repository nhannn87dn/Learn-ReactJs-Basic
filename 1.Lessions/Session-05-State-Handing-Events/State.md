# 📘 `State` trong React

## 1. State là gì?

**State** là một **đối tượng dữ liệu đặc biệt** trong React, dùng để lưu **trạng thái hiện tại** của một component. Khi state thay đổi, React sẽ **render lại giao diện** để phản ánh sự thay đổi đó.

### ✅ Tại sao cần state?

* Giúp component **ghi nhớ** thông tin theo thời gian.
* Là cách React biết **khi nào cần cập nhật UI**.
* Là phần cốt lõi của các ứng dụng tương tác (form, button, v.v.).

---

## 2. So sánh State và Props

| Tiêu chí         | Props                                      | State                             |
| ---------------- | ------------------------------------------ | --------------------------------- |
| Định nghĩa       | Dữ liệu được truyền từ component cha xuống | Dữ liệu nội bộ của component      |
| Ai quản lý?      | Component cha                              | Component hiện tại (self-managed) |
| Có thể thay đổi? | Không (read-only)                          | Có thể thay đổi (mutable)         |
| Dùng để làm gì?  | Truyền dữ liệu và cấu hình                 | Lưu trạng thái thay đổi động      |

---

## 3. Cách khai báo và sử dụng state với `useState` trong function component

React cung cấp hook `useState` để dùng state trong function component.

### 📌 Cú pháp

```jsx
const [stateValue, setStateValue] = useState(initialValue);
```

* `stateValue`: giá trị hiện tại
* `setStateValue`: hàm để cập nhật giá trị
* `initialValue`: giá trị khởi tạo (số, chuỗi, mảng, object,...)

### 🌻Khi nào thì cần đến State

Bất cứ khi nào dữ liệu thay đổi trong một component, State có thể được sử dụng.

* ví dụ: Từ ẩn sang hiện, từ không có thành có... Nói chung là trạng thái lúc đầu khác với lúc sau
* Ví dụ: một form nhập input type text mỗi trường trong Form sẽ giữ lại trạng thái của nó dựa trên dữ liệu đầu vào của người dùng (user input). Nếu đầu vào của người dùng thay đổi, trạng thái của các text input sẽ thay đổi, đây là nguyên nhân cần re-rendering của component và tất cả các component con của nó. Và khi này chúng ta sẽ sử dụng state

### 🌻 State hoạt động như thế nào ?

Trong React, state (trạng thái) là một đối tượng chứa thông tin dữ liệu và trạng thái của một thành phần (component).

State được sử dụng để lưu trữ và quản lý dữ liệu trong function component. State có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả số, chuỗi, mảng, đối tượng hoặc các giá trị boolean.

Khi state thay đổi, React sẽ tự động render lại giao diện người dùng của thành phần để phản ánh các thay đổi mới. Tức là, React sẽ so sánh giá trị cũ và giá trị mới của state và chỉ cập nhật những phần cần thiết của giao diện người dùng.

Để thay đổi giá trị của state, bạn cần sử dụng phương thức setState(). Phương thức này được cung cấp bởi React và cho phép bạn cập nhật giá trị của state và kích hoạt quá trình render lại giao diện người dùng. Khi gọi setState(), React sẽ thực hiện quá trình so sánh và cập nhật giao diện người dùng nếu cần.

===============================

---

## 4. Ví dụ cơ bản

### 4.1 🎁 Bộ đếm số lần bấm nút

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo count = 0

  return (
    <div>
      <p>Số lần bấm: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm tôi!
      </button>
    </div>
  );
}
```

🧠 Giải thích

* Bản chất `useState(0)` là một function return về một mảng [] có 2 phần tử. Tạo ra một state với giá trị ban đầu là `0`
* `[count, setCount]` là đang sử dụng cú pháp `Destructuring assignment` của JavaScript
* `count`: Biến lưu trữ giá trị hiện tại của state
* `setCount`: Hàm để cập nhật giá trị của `count`.
* Mỗi khi `setCount` được gọi, component sẽ được re-render với giá trị `count` mới

---

### 4.2  🎁 Button Like

Dưới đây là ví dụ cập nhật về **Button Like**, trong đó khi người dùng nhấn "Like", số lượng like sẽ tăng lên và màu chữ của nút sẽ thay đổi.

Code ví dụ

```jsx
import React, { useState } from "react";

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Hàm xử lý sự kiện khi người dùng nhấn nút "Like"
  const handleLike = () => {
    setLikeCount(likeCount + 1);
    setIsLiked(true); // Đánh dấu rằng đã nhấn Like
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{ color: isLiked ? "red" : "black" }} // Đổi màu chữ
      >
        Like ({likeCount})
      </button>
    </div>
  );
}

export default LikeButton;
```

🧠 Giải thích

1. **useState**:
   * `likeCount`: lưu trữ số lượng like.
   * `isLiked`: lưu trữ trạng thái liệu người dùng đã nhấn nút like hay chưa.
2. **handleLike**: Khi người dùng nhấn nút, hàm này sẽ:

   * Tăng giá trị `likeCount` lên 1.
   * Đặt `isLiked` thành `true` để thay đổi màu chữ.

3. **style**: Sử dụng thuộc tính `style` để kiểm tra trạng thái `isLiked`. Nếu `isLiked` là `true`, màu chữ của nút sẽ chuyển sang **màu đỏ**, ngược lại sẽ giữ **màu đen**.

### 4.3 🎁 Button Đèn Xanh, Đèn Đỏ

Dưới đây là ví dụ **mô phỏng đèn giao thông** với 3 nút để đổi màu thành **Đỏ**, **Xanh**, và **Vàng**:

Code ví dụ

```jsx
import React, { useState } from "react";

function TrafficLight() {
  // State để theo dõi trạng thái của đèn (đỏ, xanh, vàng)
  const [lightColor, setLightColor] = useState("red");

  // Hàm thay đổi màu đèn
  const changeLight = (color) => {
    setLightColor(color);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: lightColor, // Đổi màu đèn theo state
          margin: "0 auto",
          transition: "background-color 0.5s ease", // Hiệu ứng chuyển đổi mượt mà
        }}
      ></div>

      {/* Các nút để thay đổi trạng thái của đèn */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => changeLight("red")}
          style={{ marginRight: "10px" }}
        >
          Red
        </button>
        <button
          onClick={() => changeLight("yellow")}
          style={{ marginRight: "10px" }}
        >
          Yellow
        </button>
        <button onClick={() => changeLight("green")}>Green</button>
      </div>
    </div>
  );
}

export default TrafficLight;
```

🧠 Giải thích

1. **useState**: State `lightColor` được sử dụng để lưu màu hiện tại của đèn. Ban đầu, nó có giá trị là `'red'`.
2. **changeLight**: Hàm này được gọi khi người dùng nhấn một trong ba nút. Mỗi nút sẽ truyền vào một giá trị màu khác nhau (`'red'`, `'yellow'`, `'green'`) để thay đổi màu của đèn.

3. **style**:

   * `backgroundColor`: Đèn sẽ đổi màu theo giá trị `lightColor`.
   * `transition`: Thêm hiệu ứng mượt mà khi chuyển đổi giữa các màu đèn.

4. **button**: Có 3 nút, mỗi nút tương ứng với một màu (Đỏ, Vàng, Xanh). Khi nhấn vào các nút, hàm `changeLight` sẽ thay đổi màu của đèn dựa trên màu tương ứng của nút.

Với ví dụ này, bạn có thể dễ dàng chuyển đổi qua lại giữa 3 màu **Đỏ**, **Vàng**, và **Xanh** bằng cách nhấn vào các nút.

---

## 🔥 5. State là cô lập và cục bộ

State là một trạng thái cục bộ và cô lập cho một phiên bản (instance) trên một mành hình UI.

Nói cách khác. Nếu bạn `render` 2 lần một component, thì mỗi bản sao sẽ có trạng thái cô lập hoàn toàn, có nghĩa là thay đổi trạng thái của một trong số chúng thì cái kia không ảnh hưởng.

```jsx
//Dùng component Count 2 lần
const App = () => {
  return (
    <>
      <h1>Hello State</h1>
      <Count /> {/*  bản sao 1 */}
      <Count /> {/*  bản sao 2 */}
    </>
  );
};
export default App;
```

## 6. Cập nhật state và các lưu ý quan trọng

### ❗ KHÔNG được cập nhật state trực tiếp

```js
count = count + 1; // ❌ Không đúng!
```

### ✅ Luôn dùng hàm cập nhật

Đây là cách cơ bản nhất để cập nhật state bằng cách cung cấp một giá trị mới cho state. Trong functional component, bạn sử dụng hàm `setState` được trả về từ hook `useState`.

```js
setCount(count + 1); // ✔️ Đúng
setIsSuccess(true); // ✔️ Đúng
setMsg("Invalid username or password !");// ✔️ Đúng
```

### ⚠️ Cập nhật State dựa trên State hiện tại

Khi bạn muốn cập nhật state dựa trên giá trị hiện tại của nó, cần sử dụng một hàm callback trong `setState` (đối với cả functional component và class component). Cách này giúp đảm bảo rằng state được cập nhật chính xác ngay cả khi có nhiều cập nhật xảy ra liên tiếp.

Để tối ưu hiệu suất, React không cập nhật state và re-render từng tí một ngay lập tức. Thay vào đó:

* Nó dồn nhiều thay đổi lại thành một “batch”.
* Sau đó mới render lại một lần duy nhất.

Trong react gọi đây là hàng đợi `Queue`. Xem thêm [ở đây](https://react.dev/learn/queueing-a-series-of-state-updates)

Một ví dụ dễ bị lỗi:

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

💥 Sai! count + 1 ba lần vẫn chỉ tăng 1. Vì `count` nắm giữ giá trị hiện tại nhất là `0`

✅ Sửa bằng cách dùng prevState:

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); //react sẽ thêm nó vào hàng đợi
        setNumber(n => n + 1); //react sẽ thêm nó vào hàng đợi
        setNumber(n => n + 1); //react sẽ thêm nó vào hàng đợi
      }}>+3</button>
    </>
  )
}
```

Quá trình diễn ra như sau:

| queued update | n |  returns  |
|:-------------:|:-:|:---------:|
| n => n + 1    | 0 | 0 + 1 = 1 |
| n => n + 1    | 1 | 1 + 1 = 2 |
| n => n + 1    | 2 | 2 + 1 = 3 |

Kết quả cuối cùng nó xử lý 1 lần: tăng đúng 3 đơn vị.

---

---

## 7. Quản lý nhiều state hoặc state là object

### 📌 Cách khai báo nhiều state

```jsx
const [name, setName] = useState('');
const [age, setAge] = useState(0);
```

### 📌 Hoặc dùng object

Cách này khuyến nghị khi component có nhiều state và các state xâu chuỗi với nhau. Ví dụ như các inputs của form, thông tin của một đối tượng.

```jsx
const [user, setUser] = useState({ name: '', age: 0 });

function updateName(newName) {
  setUser(prev => ({ ...prev, name: newName }));
}
```

---

## 8.1. Xử lý state là mảng

Nếu state là một `mảng`, Hãy xem ví dụ sau đây về cách cập nhật state

### 🎯 Mục tiêu: thêm và xoá công việc

```jsx
import { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDelete(index)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 9. ✅ Best Practices và ❌ Lỗi thường gặp

| ✅ Best Practice                            | ❌ Lỗi phổ biến                             |
| ------------------------------------------ | ------------------------------------------ |
| Luôn dùng `setState` để cập nhật state     | Thay đổi state trực tiếp                   |
| Cập nhật dựa trên giá trị cũ khi cần thiết | Không dùng prevState khi cần               |
| Tách nhiều state nhỏ nếu logic khác nhau   | Nhét quá nhiều thứ vào một object state    |
| Giữ state đơn giản, dễ đọc                 | Lồng quá nhiều cấp trong object hoặc array |

---

## 10. Sử dụng TypeScript với State

### 10.1. Khai báo kiểu dữ liệu cho state

```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('React');
```

---

### 10.2. Định nghĩa interface cho object state hoặc mảng

```tsx
interface Todo {
  id: number;
  text: string;
}

const [todos, setTodos] = useState<Todo[]>([]);
```

---

### 10.3. Ví dụ Todo List dùng TypeScript

```tsx
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

function TodoAppTS() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const handleAdd = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input
      };
      setTodos(prev => [...prev, newTodo]);
      setInput('');
    }
  };

  return (
    <div>
      <h3>Todo List (TS)</h3>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

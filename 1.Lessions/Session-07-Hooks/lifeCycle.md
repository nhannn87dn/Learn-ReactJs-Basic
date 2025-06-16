# Khái niệm Lifecycle

🌻 **Re-Render trong React là gì?**

Khi nói về Performances của React, có 2 giai đoạn chính mà chúng ta cần quan tâm:

- **initial render** : Khởi chạy App, React gọi Root Component bằng cách gọi `createRoot` tạo DOM và chạy hàm `render` để render component hiển thị ra màn hình.

- **Re-render** Xảy ra khi React cần update App một số giá trị mới. Thông thường, điều này xảy ra do người dùng tương tác với ứng dụng (events handling) hoặc một số dữ liệu bên ngoài đến thông qua một yêu cầu bất đồng bộ ví dụ như call API lấy data đổ về.

===============================

🌻 **Khi nào và tại sao một component render ?**

Có 2 lí do để 1 component render:

1. Render lần đầu tiên (initial render)

2. State của component hoặc component CHA của nó thay đổi.

===============================

🌻 **LifeCycle**

Quá trình xử lý yêu cầu tương tác từ giao diện người dùng có 3 bước:

1. Triggering a render (nhận yêu cầu Order từ khách đưa cho nhà bếp)

2. Rendering the component (nhà bếp chuẩn bị Order)

3. Committing to the DOM (Mang món ra bàn cho khách)

![](img/render.png)

Chu trình này trong React Component còn được hiểu với một khái niệm đó là **LifeCycle** - Vòng đời của một Component.

- Component được sinh ra - Gọi món (**Mounting**)
- Component tồn tại và thay đổi - Chuẩn bị Món (**Updation**)
- Component mất đi - Mang món ra cho khách (**Unmounting**)

---

Xem thêm mô hình LifeCycle đối với Class Components: <https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

Xem ví dụ minh họa

Chúng ta sẽ tìm hiểu kỹ hơn các khái niệm này trong bài học về Hook useEffect. Trecking một component để biết khi nào thì nó **Mounting**, khi nào thi nó **Updation**, và khi nào thì nó đã **Unmounting**

Đọc thêm bài viết: <https://viblo.asia/p/lifecycle-component-trong-reactjs-gGJ59jzxKX2>

---

QUY TRÌNH 1 COMPONENT RENDER:

🔸**Step 1: Kích hoạt render**

- Initial render

Khởi chạy App, React gọi Root Component bằng cách gọi createRoot tạo DOM và chạy hàm render để render component hiển thị ra màn hình.

Example:

```js
import Image from "./Image.js";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<Image />);
```

- State update

Một component đã được render trước đó (Initial render), bạn có thể kích hoạt lại quá trình render bằng cách thay đổi State thông qua phương thức `set`

(Bạn có thể tưởng tượng những điều này giống như một vị khách của nhà hàng gọi trà, món tráng miệng và đủ thứ nữa sau khi gọi món đầu tiên, tùy thuộc vào tình trạng khát hay đói của họ.)

![](img/render-2.png)

🔸**Step 2: React render component của bạn**

Sau khi kích hoạt một render, React gọi đến component lấy nội dung hiển thị ra màn hình. Thuật ngữ **"Rendering"** nghĩa là React đang gọi đến component của bạn.

- Trong lần render đầu tiên (initial render):

  - React sẽ gọi root component
  - React sẽ tạo các DOM Node

- Các lần render tiếp theo:

  - React gọi đến function component có State thay đổi đã kích hoạt render.
  - React sẽ tính toán so sánh các thuộc tính của chúng (state), nếu không có bất kỳ thay đổi nào kể từ lần render trước đó thì React bỏ qua và đến giai đoạn tiếp theo Commit.

🔸Step 3: React cập nhật thay đổi đến DOM

- Trong lần render đầu tiên (initial render): React sử dụng phương thức `appendChild()` DOM API để đặt tất cả các DOM nodes mà nó đã tạo vào `<div id="root">` để hiển thị ra màn hình.
- Re-renders:
  - React tạo ra virtual DOM. React sẽ sử dụng thuật toán **Diffing** để nhận biết được đã có điều gì khác hoặc thay đổi trong virtual DOM.
  - Bước tiếp theo là Reconciliation. Ở bước này, virtual DOM sẽ được cập nhật lại với kết quả khác sau khi sử dụng thuật toán Diffing ở bước đầu tiên.
  - React chỉ update lại những gì thay đổi vào "real" DOM (DOM thật).

🔸Step 4 Kết - Commit: Vẽ lại trình duyệt

Sau khi rendering xong and React updated lại DOM, trình duyệt vẽ lại màn hình.

===============================

**Ví dụ chứng minh React chỉ update lại những thay đổi cần thiết**

```js
//App.js

function App() {
  console.log("Parent rendered");
  return (
    <div className="wrap">
      <h1>Parent Component</h1>
      <div>-----------------</div>
      <Child />
    </div>
  );
}

// Chỉ có biến count thay đổi ở Child
// Check console để xem
function Child({ name }: { name: string }) {
  const [count, setCount] = useState < number > 0;
  console.log("Child Rendered");
  return (
    <div>
      <h1>Child Component {name}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count:{count}</p>
    </div>
  );
}

export default App;
```

> `Xem thêm: Khi nào thì React component re-renders lại chính nó ?`

> View: <https://www.developerway.com/posts/react-re-renders-guide>

===============================

**Tại sao cần phải nắm chắc khi nào thì một Component Re-render?**

- Để ngăn Component re-render khi không cần thiết
- Tối ưu performance, app chạy nhanh hơn.

===============================

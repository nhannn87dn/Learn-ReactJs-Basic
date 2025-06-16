# Giới thiệu về hook  `useCallback`

## 1. `useCallback` là gì?

Nói một cách đơn giản, **`useCallback` là một React Hook cho phép chúng ta "ghi nhớ" (memoize) một hàm.** "Ghi nhớ" ở đây có nghĩa là gì? Nó giống như việc bạn ghi lại một công thức nấu ăn vào một cuốn sổ tay. Lần sau, khi cần nấu món đó, bạn chỉ cần lấy cuốn sổ ra xem mà không cần phải nghĩ lại từ đầu hay viết lại công thức.

Trong React, điều này có nghĩa là **`useCallback` sẽ trả về một phiên bản của hàm đã được ghi nhớ**, và phiên bản này sẽ chỉ thay đổi khi các "phụ thuộc" của nó (những thứ mà hàm đó cần để hoạt động) thay đổi. Mục đích chính là **tối ưu hóa hiệu suất** bằng cách tránh việc các hàm bị tạo lại một cách không cần thiết trong mỗi lần component render.

## 2. Tại sao chúng ta cần `useCallback`? (Vấn đề nó giải quyết)

Để hiểu tại sao `useCallback` lại quan trọng, chúng ta cần nắm được một vấn đề thường gặp trong React: **re-render không cần thiết**.

Hãy tưởng tượng bạn có một component cha và một component con. Component cha truyền một hàm xuống component con làm một prop.

```jsx
// Component con
function MyButton({ onClick }) {
  console.log('Button re-rendered!'); // Xem nó có render lại không
  return <button onClick={onClick}>Click me</button>;
}

// Component cha
function ParentComponent() {
  const [count, setCount] = React.useState(0);

  // Hàm này sẽ được tạo lại MỖI KHI ParentComponent re-render
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <MyButton onClick={handleClick} /> {/* Truyền hàm xuống component con */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

// Giả sử MyButton được bọc bởi React.memo để tối ưu hóa
const MemoizedMyButton = React.memo(MyButton);

// Component cha dùng MemoizedMyButton
function ParentComponentWithMemo() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* Mặc dù MyButton đã được memoize, nó vẫn re-render! */}
      <MemoizedMyButton onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increase Count (Parent)</button>
    </div>
  );
}
```

Trong ví dụ trên, khi bạn nhấn nút "Increase Count (Parent)", `ParentComponentWithMemo` sẽ re-render. Điều này làm cho hàm `handleClick` **được tạo lại từ đầu** trong mỗi lần render.

Mặc dù chúng ta đã dùng `React.memo` cho `MyButton` để ngăn nó re-render nếu props không thay đổi, nhưng vì hàm `handleClick` luôn là một **phiên bản MỚI** trong mỗi lần render của `ParentComponentWithMemo` (vì nó được định nghĩa lại), React sẽ thấy rằng prop `onClick` đã thay đổi, và do đó, `MemoizedMyButton` **vẫn sẽ bị re-render** một cách không cần thiết!

Đây chính là vấn đề `useCallback` sinh ra để giải quyết.

## 3. `useCallback` hoạt động như thế nào?

`useCallback` hoạt động bằng cách "ghi nhớ" hàm mà bạn truyền vào. Nó sẽ chỉ tạo lại hàm đó khi có một trong các "phụ thuộc" của nó thay đổi.

**Cú pháp cơ bản:**

```jsx
const memoizedCallback = useCallback(() => {
  // Logic của hàm bạn muốn ghi nhớ
}, [dependencies]); // Mảng phụ thuộc
```

* **Hàm đầu tiên:** Là hàm mà bạn muốn ghi nhớ.
* **Mảng phụ thuộc (dependency array):** Đây là một mảng các giá trị. `useCallback` sẽ chỉ tạo lại hàm `memoizedCallback` khi bất kỳ giá trị nào trong mảng này thay đổi. Nếu mảng rỗng `[]`, hàm sẽ chỉ được tạo **một lần duy nhất** trong suốt vòng đời của component.

**Ví dụ minh họa:**

Chúng ta sẽ sửa lại ví dụ trên bằng cách sử dụng `useCallback` cho `handleClick`:

```jsx
// Component con (vẫn dùng MyButton hoặc MemoizedMyButton)
function MyButton({ onClick }) {
  console.log('Button re-rendered!');
  return <button onClick={onClick}>Click me</button>;
}

const MemoizedMyButton = React.memo(MyButton);

// Component cha với useCallback
function ParentComponentOptimized() {
  const [count, setCount] = React.useState(0);

  // Hàm này bây giờ đã được ghi nhớ!
  // Nó sẽ KHÔNG được tạo lại trừ khi `count` thay đổi
  const handleClick = React.useCallback(() => {
    setCount(prevCount => prevCount + 1); // Nên dùng functional update cho setState
  }, []); // Mảng rỗng nghĩa là hàm chỉ được tạo một lần duy nhất

  // Hoặc nếu bạn muốn hàm thay đổi khi count thay đổi:
  // const handleClick = React.useCallback(() => {
  //   setCount(count + 1);
  // }, [count]); // Hàm sẽ thay đổi khi 'count' thay đổi

  return (
    <div>
      <p>Count: {count}</p>
      {/* Bây giờ, MemoizedMyButton sẽ KHÔNG re-render khi ParentComponentOptimized re-render
          (trừ khi có các prop khác thay đổi hoặc chính nó có state riêng) */}
      <MemoizedMyButton onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increase Count (Parent)</button>
    </div>
  );
}
```

Bây giờ, khi bạn nhấn nút "Increase Count (Parent)", `ParentComponentOptimized` sẽ re-render, nhưng hàm `handleClick` sẽ **không được tạo lại**. `useCallback` đảm bảo rằng `MemoizedMyButton` nhận được cùng một tham chiếu hàm `onClick` từ lần render trước. Vì vậy, `MemoizedMyButton` sẽ không thấy prop `onClick` của nó thay đổi, và do đó, nó **sẽ không re-render** (nhờ `React.memo`), giúp tối ưu hiệu suất.

**Lưu ý quan trọng về mảng phụ thuộc:**

* **`[]` (Mảng rỗng):** Hàm chỉ được tạo **một lần duy nhất** khi component được mount. Sử dụng khi hàm không phụ thuộc vào bất kỳ state hay props nào từ component.
* **`[value1, value2]`:** Hàm sẽ được tạo lại **chỉ khi** `value1` hoặc `value2` thay đổi. Đảm bảo bạn liệt kê TẤT CẢ các biến từ scope bên ngoài mà hàm đó sử dụng (state, props, biến khác) vào mảng phụ thuộc để tránh lỗi.

## 4. Khi nào nên sử dụng `useCallback`?

* **Khi truyền hàm xuống các component con được tối ưu hóa (đã dùng `React.memo`):** Đây là trường hợp sử dụng phổ biến và hiệu quả nhất. `useCallback` giúp đảm bảo `React.memo` hoạt động đúng như mong đợi.
* **Là hàm xử lý sự kiện (event handlers):** Đặc biệt là những hàm được truyền xuống component con hoặc khi chúng ta muốn chúng giữ nguyên tham chiếu.
* **Khi truyền hàm vào các dependency array của các Hooks khác như `useEffect` hoặc `useMemo`:** Điều này giúp ngăn chặn `useEffect` chạy lại hoặc `useMemo` tính toán lại không cần thiết.
* **Khi hàm là một phần của một custom hook** và bạn muốn nó ổn định về tham chiếu.

Hãy nhớ rằng, **tính bằng tham chiếu (referential equality)** là chìa khóa ở đây. Trong JavaScript, hai hàm có cùng logic nhưng được định nghĩa ở hai vị trí/thời điểm khác nhau sẽ có hai tham chiếu khác nhau. `useCallback` giúp chúng ta duy trì cùng một tham chiếu cho hàm qua các lần render.

## 5. Khi nào KHÔNG nên sử dụng `useCallback`?

`useCallback` là một công cụ mạnh mẽ, nhưng không phải lúc nào cũng cần thiết. Việc lạm dụng nó có thể gây ra nhiều rắc rối hơn là lợi ích.

* **Không phải tất cả các hàm đều cần `useCallback`:** Nếu một hàm không được truyền xuống component con được memoize, hoặc nếu việc re-render của component con đó là không đáng kể, thì không cần dùng `useCallback`. Việc thêm `useCallback` vào mỗi hàm có thể làm code của bạn phức tạp hơn và thậm chí tốn chi phí nhỏ về bộ nhớ và tính toán cho chính Hook đó.
* **Khi chi phí re-render là không đáng kể:** Đối với các component đơn giản, nhỏ gọn, việc re-render vài lần cũng không ảnh hưởng đến hiệu suất tổng thể.
* **Đừng tối ưu hóa quá sớm:** Chỉ nên nghĩ đến `useCallback` khi bạn thực sự thấy có vấn đề về hiệu suất (thường được phát hiện qua các công cụ profiling của React DevTools) do re-render không cần thiết gây ra.

**Ví dụ về khi không cần dùng:**

```jsx
function MySimpleComponent() {
  const [value, setValue] = React.useState('');

  // Hàm này không được truyền xuống component con
  // và không được dùng trong dependency array của các Hooks khác
  // => Không cần useCallback
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
```

## Kết luận

`useCallback` là một công cụ tuyệt vời để tối ưu hóa hiệu suất ứng dụng React của bạn, đặc biệt khi làm việc với các component con đã được `React.memo`. Nó giúp chúng ta kiểm soát việc tạo lại hàm, đảm bảo các component con nhận được cùng một tham chiếu hàm và tránh các re-render không cần thiết.

Tuy nhiên, hãy nhớ sử dụng nó một cách có chọn lọc. Đừng lạm dụng `useCallback` trên mọi hàm, mà hãy tập trung vào những nơi thực sự cần thiết để giải quyết vấn đề hiệu suất.

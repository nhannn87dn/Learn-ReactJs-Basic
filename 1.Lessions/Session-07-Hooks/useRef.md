# Giới thiệu về `useRef`

## 1. `useRef` là gì?

`useRef` là một React Hook cho phép chúng ta **tạo ra một đối tượng "ref"** có thể tồn tại xuyên suốt các lần render của component mà không bị khởi tạo lại. Đối tượng "ref" này có một thuộc tính đặc biệt là `.current`, và chính thuộc tính này là nơi chúng ta có thể:

1. **Lưu trữ một giá trị bất biến (mutable value)**: Giá trị này sẽ không bị thay đổi khi component re-render, và việc thay đổi nó cũng **không gây ra re-render** cho component. Đây là điểm khác biệt lớn so với `useState`.
2. **Truy cập trực tiếp đến một phần tử DOM**: Đây là công dụng phổ biến nhất của `useRef` mà bạn sẽ thường gặp. Nó cho phép bạn "chạm" vào một thẻ HTML thực sự trên trang web (ví dụ: một thẻ `<input>`, `<button>`) để làm những việc như focus vào input, đọc giá trị, hay kích hoạt một phương thức của phần tử đó.

Hãy tưởng tượng `useRef` giống như một cái **hộp giữ đồ**. Bạn có thể bỏ bất cứ thứ gì vào cái hộp đó (giá trị, tham chiếu đến DOM), và cái hộp đó sẽ **luôn ở đó**, không biến mất hay tạo lại khi bạn "vẽ lại" component của mình. Quan trọng là, khi bạn thay đổi nội dung bên trong cái hộp, **component của bạn không tự động được vẽ lại**.

## 2. Tại sao chúng ta cần `useRef`? (Vấn đề nó giải quyết)

Trong React, chúng ta thường làm việc với trạng thái (state) và props để điều khiển giao diện người dùng một cách "tuyên bố" (declarative). Tuy nhiên, có những trường hợp chúng ta cần một cách tiếp cận "mệnh lệnh" (imperative), tức là trực tiếp thao tác với một phần tử DOM cụ thể hoặc lưu trữ một giá trị mà không muốn nó gây ra re-render.

Các trường hợp phổ biến:

* **Truy cập và thao tác trực tiếp với DOM**: React khuyến khích chúng ta tránh thao tác trực tiếp với DOM. Tuy nhiên, có những lúc bạn không thể tránh khỏi, ví dụ như:
  * Tự động focus vào một trường input khi component được hiển thị.
  * Kích hoạt một hoạt ảnh (animation) trên một phần tử.
  * Đo kích thước hoặc vị trí của một phần tử.
  * Tích hợp với các thư viện JavaScript không phải React (ví dụ: thư viện biểu đồ).
* **Lưu trữ giá trị mà không cần re-render**: Đôi khi bạn cần một biến để lưu trữ một giá trị nào đó giữa các lần render, nhưng việc thay đổi giá trị này không cần thiết phải cập nhật giao diện người dùng. Ví dụ:
  * Lưu trữ ID của một timer (`setInterval`/`setTimeout`).
  * Lưu trữ số lần component được render (nhưng không muốn hiển thị trên UI).
  * Lưu trữ một đối tượng lớn không phải là state.

**Ví dụ về vấn đề không có `useRef`:**

Nếu bạn dùng `useState` để lưu trữ một tham chiếu DOM, mỗi khi tham chiếu đó thay đổi (dù bạn không muốn), nó sẽ gây ra re-render không cần thiết. Hoặc nếu bạn dùng một biến JavaScript thông thường, nó sẽ bị reset lại mỗi khi component re-render. `useRef` giải quyết cả hai vấn đề này.

## 3. `useRef` hoạt động như thế nào?

`useRef` trả về một đối tượng ref với một thuộc tính `.current`. Bạn có thể gán bất kỳ giá trị nào cho `.current`, và giá trị đó sẽ được duy trì qua các lần re-render của component.

**Cú pháp cơ bản:**

```jsx
const myRef = useRef(initialValue);
```

* `initialValue`: Giá trị khởi tạo cho thuộc tính `.current` của ref. Nếu không truyền gì, `.current` sẽ là `undefined`.
* `useRef` sẽ trả về một đối tượng: `{ current: initialValue }`.

**Ví dụ minh họa (Truy cập DOM):**

Hãy cùng xem cách chúng ta có thể tự động focus vào một trường input khi component được hiển thị:

```jsx
import React, { useRef, useEffect } from 'react';

function FocusInputExample() {
  // 1. Tạo một ref
  const inputRef = useRef(null);

  useEffect(() => {
    // 3. Sử dụng ref trong useEffect để focus vào input khi component mount
    if (inputRef.current) {
      inputRef.current.focus(); // Gọi phương thức 'focus' của phần tử DOM
    }
  }, []); // Mảng rỗng để chỉ chạy một lần khi component mount

  const handleClick = () => {
    // Cũng có thể truy cập DOM thông qua ref khi có sự kiện
    if (inputRef.current) {
      alert(`Giá trị hiện tại của input: ${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <h2>Ví dụ về Focus Input</h2>
      {/* 2. Gán ref cho phần tử DOM */}
      <input type="text" ref={inputRef} placeholder="Tôi sẽ tự động focus!" />
      <button onClick={handleClick}>Lấy giá trị Input</button>
      <p>Thử tải lại trang, bạn sẽ thấy input tự động được focus.</p>
    </div>
  );
}
```

Trong ví dụ này:

1. Chúng ta tạo `inputRef` bằng `useRef(null)`. Ban đầu `.current` là `null`.
2. Chúng ta gán `inputRef` vào thuộc tính `ref` của thẻ `<input>`. Khi React render, nó sẽ tự động gán phần tử DOM thực tế của `<input>` vào `inputRef.current`.
3. Trong `useEffect` (chạy khi component mount), chúng ta kiểm tra `inputRef.current` (đảm bảo nó không phải `null`) và sau đó gọi phương thức `.focus()` trực tiếp trên phần tử DOM đó.

**Ví dụ minh họa (Lưu trữ giá trị bất biến):**

```jsx
import React, { useState, useRef } from 'react';

function CounterWithRef() {
  const [count, setCount] = useState(0);
  // Tạo một ref để lưu trữ số lần component được render
  const renderCount = useRef(0);

  // Mỗi khi component render, tăng giá trị của ref
  renderCount.current = renderCount.current + 1;

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Ví dụ về Lưu trữ giá trị với useRef</h2>
      <p>Count (State): {count}</p>
      {/* Giá trị này sẽ KHÔNG gây re-render khi nó thay đổi */}
      <p>Component đã re-render: {renderCount.current} lần</p>
      <button onClick={handleIncrement}>Tăng Count</button>
      <p>
        **Lưu ý:** Khi bạn nhấn "Tăng Count", cả "Count (State)" và "Component đã re-render" đều tăng.
        Nhưng nếu bạn thay đổi `renderCount.current` ở một nơi khác mà không thay đổi `count`
        (hoặc state nào đó gây re-render), thì giao diện sẽ không cập nhật ngay lập tức.
        Đây là lý do bạn không nên dùng ref để lưu trữ những giá trị cần hiển thị trên UI mà phải là state.
      </p>
    </div>
  );
}
```

Trong ví dụ này, `renderCount.current` được dùng để theo dõi số lần component re-render. Quan trọng là, việc thay đổi `renderCount.current` **không kích hoạt một lần re-render mới**. Nó chỉ cập nhật giá trị bên trong đối tượng ref. Component chỉ re-render khi `setCount` được gọi (do `useState`).

## 4. Khi nào nên sử dụng `useRef`?

* **Truy cập trực tiếp đến DOM elements**: Như ví dụ `inputRef.current.focus()`. Đây là công dụng phổ biến nhất.
* **Lưu trữ một giá trị mà không muốn nó gây re-render**: Khi bạn cần một biến để giữ giá trị qua các lần render nhưng việc thay đổi giá trị đó không cần cập nhật giao diện. Ví dụ: `timerId` của `setInterval`, hoặc một instance của class bên ngoài React.
* **Tham chiếu đến một component instance**: Ít phổ biến hơn, nhưng có thể dùng để gọi một phương thức của một component con (chỉ dùng với `forwardRef`).
* **Lưu trữ các đối tượng bất biến (mutable objects)**: Nếu bạn có một đối tượng lớn không phải là state và bạn cần duy trì tham chiếu của nó mà không gây re-render khi nội dung bên trong thay đổi.

## 5. Khi nào KHÔNG nên sử dụng `useRef`?

* **Để lưu trữ dữ liệu cần được hiển thị trên UI và gây re-render**: Nếu một giá trị thay đổi và bạn muốn giao diện người dùng cập nhật theo, hãy sử dụng `useState`. `useRef` sẽ không tự động re-render component khi `.current` của nó thay đổi.
* **Để thay thế `useState` cho quản lý trạng thái**: `useRef` không phải là một giải pháp thay thế cho `useState`. Chúng có mục đích khác nhau. `useState` dùng để quản lý trạng thái hiển thị trên UI, `useRef` dùng cho các giá trị nội bộ không ảnh hưởng đến UI hoặc tương tác trực tiếp với DOM.
* **Thao tác DOM quá nhiều**: Mặc dù `useRef` cho phép bạn truy cập DOM, hãy cố gắng hạn chế thao tác DOM trực tiếp. React được thiết kế để bạn làm việc với trạng thái và props một cách tuyên bố. Chỉ sử dụng ref khi không có cách nào khác để đạt được điều bạn muốn.

## Tổng kết

`useRef` là một Hook độc đáo trong React, cho phép chúng ta có một "cái hộp" để lưu trữ các giá trị bất biến hoặc các tham chiếu trực tiếp đến các phần tử DOM. Nó là cầu nối giữa thế giới "tuyên bố" của React và thế giới "mệnh lệnh" của DOM, giúp giải quyết những vấn đề mà `useState` hay các Hooks khác không thể làm được.

Hãy nhớ rằng, `useRef` không làm re-render component khi giá trị `.current` của nó thay đổi. Điều này làm cho nó trở thành công cụ lý tưởng cho các tác vụ như tương tác với DOM trực tiếp hoặc lưu trữ các giá trị cần được duy trì giữa các lần render mà không cần cập nhật UI.

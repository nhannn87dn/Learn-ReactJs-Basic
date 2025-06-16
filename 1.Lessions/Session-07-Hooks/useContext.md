# Giới thiệu về hook `useContext`

## 1. `useContext` là gì?

`useContext` là một React Hook cho phép bạn **đọc và đăng ký các thay đổi từ một React Context**. Vậy "Context" là gì?

Hãy tưởng tượng bạn có một thông tin nào đó (ví dụ: tên người dùng đang đăng nhập, chủ đề sáng/tối của ứng dụng) mà rất nhiều component khác nhau trong cây component của bạn cần sử dụng.

* Nếu không có Context, bạn sẽ phải truyền thông tin đó từ component cha xuống component con, rồi lại xuống component cháu, cứ thế qua nhiều tầng (đây chính là "prop drilling").
* **React Context** cung cấp một cách để bạn tạo ra một "kênh" truyền dữ liệu mà không cần truyền props thủ công qua từng cấp độ. Nó cho phép các component "đăng ký" để nhận dữ liệu từ kênh đó, bất kể chúng ở sâu đến đâu trong cây component.

**`useContext` chính là "cái móc" để component của bạn kết nối vào kênh dữ liệu (Context) đó và lấy ra giá trị hiện tại.**

## 2. Tại sao chúng ta cần `useContext`? (Vấn đề "Prop Drilling" nó giải quyết)

Để hiểu rõ giá trị của `useContext`, chúng ta cần nhìn vào vấn đề mà nó giải quyết: **Prop Drilling**.

Hãy xem ví dụ về việc truyền theme (chủ đề sáng/tối) qua nhiều tầng component:

```jsx
// Component con cháu nhất
function GrandchildComponent({ theme }) {
  console.log('GrandchildComponent re-rendered');
  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#eee' : '#333', padding: '10px' }}>
      <p>This is the Grandchild Component.</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Component con
function ChildComponent({ theme }) {
  console.log('ChildComponent re-rendered');
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px' }}>
      <h3>Child Component</h3>
      <GrandchildComponent theme={theme} /> {/* Truyền theme xuống GrandchildComponent */}
    </div>
  );
}

// Component cha
function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <h1>Prop Drilling Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent theme={theme} /> {/* Truyền theme xuống ChildComponent */}
    </div>
  );
}
```

Trong ví dụ trên, để `GrandchildComponent` nhận được `theme`, chúng ta phải truyền prop `theme` từ `App` xuống `ChildComponent`, rồi từ `ChildComponent` xuống `GrandchildComponent`. Điều này có vẻ đơn giản với 3 cấp độ, nhưng tưởng tượng nếu bạn có 5, 7, hoặc 10 cấp độ! Code của bạn sẽ trở nên rất khó đọc, khó bảo trì, và dễ gây ra lỗi. Đây chính là **Prop Drilling** – việc "khoan" các props qua nhiều tầng component trung gian mà bản thân chúng không cần dùng đến prop đó.

`useContext` giúp chúng ta loại bỏ sự phức tạp này.

## 3. `useContext` hoạt động như thế nào?

Để sử dụng `useContext`, bạn cần hai bước chính:

1. **Tạo một Context**: Sử dụng `React.createContext()` để tạo ra một đối tượng Context.
2. **Cung cấp giá trị cho Context**: Sử dụng `Context.Provider` để "bao bọc" các component cần truy cập giá trị, và truyền giá trị vào prop `value` của Provider.
3. **Sử dụng `useContext` để tiêu thụ giá trị**: Trong bất kỳ component con nào nằm trong `Provider`, bạn có thể gọi `useContext(MyContext)` để lấy giá trị hiện tại của Context.

**Cú pháp cơ bản:**

```jsx
// 1. Tạo Context
const MyContext = React.createContext(defaultValue); // defaultValue là giá trị mặc định nếu không có Provider

// 2. Cung cấp giá trị
function ParentComponent() {
  const someValue = 'Hello from Context!';
  return (
    <MyContext.Provider value={someValue}>
      {/* Các component con cần truy cập someValue */}
      <ChildComponent />
    </MyContext.Provider>
  );
}

// 3. Tiêu thụ giá trị
function ChildComponent() {
  const value = React.useContext(MyContext); // Hook này sẽ lấy giá trị từ Provider gần nhất
  return <p>{value}</p>;
}
```

**Ví dụ minh họa (Giải quyết Prop Drilling với `useContext`):**

Chúng ta sẽ sửa lại ví dụ Theme ở trên bằng `useContext`:

```jsx
import React, { useState, createContext, useContext } from 'react';

// 1. Tạo một Context cho Theme
const ThemeContext = createContext('light'); // Giá trị mặc định là 'light'

// Component con cháu nhất (GrandchildComponent)
function GrandchildComponent() {
  // 3. Sử dụng useContext để lấy giá trị theme
  const theme = useContext(ThemeContext);
  console.log('GrandchildComponent re-rendered');
  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#eee' : '#333', padding: '10px' }}>
      <p>This is the Grandchild Component.</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Component con (ChildComponent) - không cần nhận prop theme nữa!
function ChildComponent() {
  console.log('ChildComponent re-rendered');
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px' }}>
      <h3>Child Component</h3>
      <GrandchildComponent /> {/* KHÔNG CẦN TRUYỀN PROP THEME NỮA! */}
    </div>
  );
}

// Component cha (App)
function AppWithContext() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}> {/* 2. Cung cấp giá trị theme */}
      <div style={{ fontFamily: 'Arial' }}>
        <h1>useContext Example</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ChildComponent /> {/* KHÔNG CẦN TRUYỀN PROP THEME NỮA! */}
      </div>
    </ThemeContext.Provider>
  );
}
```

Trong ví dụ này:

1. Chúng ta tạo `ThemeContext` bằng `createContext`.
2. `AppWithContext` bao bọc toàn bộ cây component con bằng `ThemeContext.Provider` và truyền giá trị `theme` hiện tại vào prop `value`.
3. `ChildComponent` không cần biết gì về `theme` nữa.
4. `GrandchildComponent` (hoặc bất kỳ component con nào nằm trong `ThemeContext.Provider`) có thể trực tiếp gọi `useContext(ThemeContext)` để lấy giá trị `theme` mà không cần nhận nó qua props.

Khi `theme` thay đổi trong `AppWithContext`, `ThemeContext.Provider` sẽ cung cấp giá trị mới. Tất cả các component con đang sử dụng `useContext(ThemeContext)` sẽ tự động re-render với giá trị `theme` mới nhất.

## 4. Khi nào nên sử dụng `useContext`?

* **Chia sẻ dữ liệu "toàn cục"**: Khi bạn có dữ liệu mà nhiều component ở các cấp độ khác nhau trong cây cần truy cập (ví dụ: thông tin người dùng, cài đặt ngôn ngữ, theme ứng dụng, trạng thái giỏ hàng).
* **Tránh "Prop Drilling"**: Khi việc truyền props qua nhiều tầng component trở nên rườm rà và làm giảm khả năng đọc/bảo trì code.
* **Quản lý trạng thái phức tạp hơn một chút**: Đối với các trạng thái phức tạp hơn mà `useState` không đủ (ví dụ: kết hợp với `useReducer` để tạo một mini Redux).

## 5. Khi nào KHÔNG nên sử dụng `useContext`?

* **Đối với các props chỉ truyền qua 1 hoặc 2 cấp độ**: Nếu bạn chỉ cần truyền một prop qua 1 hoặc 2 cấp độ, việc tạo Context có thể là quá mức cần thiết và làm code phức tạp hơn. Đôi khi prop drilling ở mức độ nhỏ là hoàn toàn chấp nhận được và dễ hiểu hơn.
* **Để thay thế hoàn toàn Redux/Zustand/Jotai**: Mặc dù Context có thể được dùng cho quản lý trạng thái, nhưng đối với các ứng dụng rất lớn với trạng thái phức tạp, nhiều hành động, và cần các tính năng như middleware, lịch sử thay đổi, các thư viện quản lý trạng thái chuyên dụng vẫn là lựa chọn tốt hơn. Context không cung cấp các công cụ như debugging tools hay middleware out-of-the-box.
* **Khi component con không thay đổi thường xuyên**: Khi giá trị Context thay đổi, tất cả các component con sử dụng `useContext` (và các component cha của chúng) sẽ re-render. Nếu Context của bạn chứa những giá trị thay đổi rất thường xuyên và nhiều component con phụ thuộc vào nó, điều này có thể ảnh hưởng đến hiệu suất. Trong trường hợp đó, bạn có thể cần xem xét các kỹ thuật tối ưu hóa khác hoặc cân nhắc cấu trúc Context.

## Tổng kết

`useContext` là một Hook mạnh mẽ giúp chúng ta giải quyết vấn đề "prop drilling" bằng cách cung cấp một cơ chế hiệu quả để chia sẻ dữ liệu "toàn cục" xuống bất kỳ component nào trong cây. Nó làm cho code của bạn gọn gàng hơn, dễ đọc và dễ bảo trì hơn, đặc biệt trong các ứng dụng có cấu trúc component sâu.

Tuy nhiên, hãy sử dụng nó một cách hợp lý. Đừng dùng Context cho mọi thứ. Hãy cân nhắc xem liệu việc tạo Context có thực sự cần thiết hay không, hay một prop đơn giản là đủ.

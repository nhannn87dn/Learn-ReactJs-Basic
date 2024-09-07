# Session 02 - JSX, Components

# ⭐ Components and Props

## 🔥 Component trong React là gì ?

- Trong React, "component" (thành phần) là một phần của giao diện người dùng được chia thành các phần nhỏ, có thể tái sử dụng và độc lập. Chúng giúp bạn chia nhỏ các phần phức tạp của ứng dụng thành các phần nhỏ hơn, dễ quản lý và tái sử dụng.

-React được xây dựng trên cơ sở của các thành phần. Mỗi thành phần là một đoạn mã JavaScript độc lập có thể nhận dữ liệu đầu vào và trả về một phần giao diện người dùng (UI) cụ thể. Khi dữ liệu đầu vào thay đổi, giao diện người dùng sẽ được cập nhật một cách tự động mà không cần phải thực hiện lại trang web.

- Chúng ta có thể xây dựng giao diện người dùng bằng cách kết hợp các Component lại với nhau
- Có 2 loại component là Function Component và Class Component.

Doc:

- <https://react.dev/learn/your-first-component>
- <https://www.w3schools.com/REACT/react_components.asp>

**Thinking in React:** <https://react.dev/learn/thinking-in-react>

> Component trong React chúng ta hướng tới đó là một thành phẩn nhỏ, một block UI

> Bất kỳ một thành phẩn UI nào hiển thị ra màn hình đều có thể là một Component

![is component](img/thing-component.png)

![is component](img/thing-component-2.png)

Ví dụ thực tế Components: 5.Demo-Projects\product.html

---

### 🔷 Cách định nghĩa 1 component

Trong Demo trên chúng ta có các button Thêm giỏ hàng, Gọi tư vấn

Thử tạo 2 button đó trong React

Trong file `App.tsx` bạn thêm đoạn code sau

```js
//Định nghĩa một component
function ButtonAddToCart() {
  return <button type="button">Thêm giỏ hàng</button>;
}
```

Hoặc các bạn thấy trên thanh Navigations có các liên kết bằng thẻ `a`

Thì trong React nó có thể được viết thành một Component

```js
function LinkHome() {
  return <a href="home">Home</a>;
}
```

Hoặc một ví dụ khác: Hình đại diện bài viết có thể được viết thành một component

```js
function ArticleThumbnail() {
  return (
    <div>
      <img src="" alt="thumbnail" />
    </div>
  );
}
```

Kết luận: Với cách định nghĩa trên thì các bạn đã tạo ra được một function component trong React

Ngoài cách định nghĩa bên trong một file `.tsx`. Bạn có thể tách nó ra thành một file component độc lập như kiểu bạn tạo một file .css (external)

Ví dụ như cấu trúc dưới đây.

```code
react-vite/
├─ src/
│  ├─ components/
│  │  ├─ Button.tsx
│  ├─ App.tsx
```

Compponent Button

```jsx
function Button() {
  return <button type="button">Button Default</button>;
}
export default Button;
```

Với cách làm này, bạn có thể tái sử dụng UI Button khắp mọi nơi cần đến.

---

### 🔷 Cách đặt tên một Component

Bắt buộc ký tự đầu tiên phải viết HOA theo kiểu Pascal Case (còn được gọi là Upper Camel Case)

Ví dụ: Profile, BlogDetails

---

### 🔷 Sử dụng một Component

```js
//App.js

// Sử dụng component Button
function App() {
  return (
    <section>
      <h1>Hello Components</h1>
      <Button />
    </section>
  );
}
export default App;
```

---

### 🔷 Các Components lồng vào nhau

Tạo thêm một Component ActionsButton

```js
function ActionsButton() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}
```

App.js sửa lại như sau:

```js
function App() {
  return (
    <section>
      <h1>Hello Components</h1>
      <ActionsButton />
    </section>
  );
}
export default App;
```

### 🔷 Import và Export Components

React nổi bật với việc tái sử dụng, do vậy bạn nên chia nhỏ thành nhiều các component.

Để làm được vậy bạn cần tạo ra một file .js hoặc .jsx, .ts và đặt code của component vào trong đó.

Theo convension bạn nên tạo ra một folder tên là components bên trong src.

Ví dụ: Tạo một một file src/components/ButtonAddToCart.js (tên file bằng tên Component)

```js
function ButtonAddToCart() {
  return <button type="button">Thêm giỏ hàng</button>;
}
//ES6 syntax
export default ButtonAddToCart;
```

Bây giờ tại component muốn sử dụng lại Car.js thì import vào

```js
import React from "react";
//ES6 import
import ButtonAddToCart from "./ButtonAddToCart.js";

function App() {
  return (
    <>
      <h1>Hello React Components</h1>
      <ButtonAddToCart />
    </>
  );
}
```

---

## 🔥 Khi nào thì cần tạo một Component ?

- Một tính năng, thành phần lặp đi lặp lại và nhận thấy có thể tái sử dụng

Ví dụ:

> Cùng kiểu dáng Chỉ khác nhau màu nền, màu chữ, icon

!['button'](img/button-shop.png)

=> Ta chỉ cần tạo ra 1 component và tái sử dụng cho all các trường hợp

- Một thành phần có thể chạy độc lập, mà bạn chỉ muốn nó re-Render lại khi cần thiết.

- Một thành phần thường xuyên thay đổi nội dung.

---

## 🔥 Cú Pháp JSX ?

Cách mà làm cho Component trở nên Dynamic hơn

### JSX là gì ?

JSX là một cú pháp mở rộng cho JavaScript được sử dụng trong ReactJS để xây dựng giao diện người dùng. JSX cho phép chúng ta viết mã HTML tương tự và sử dụng các thành phần React để xây dựng giao diện.

JSX giúp chúng ta tạo ra các đối tượng React Element, mô tả cách giao diện người dùng sẽ được hiển thị. JSX kết hợp các thành phần React và HTML trong một cú pháp duy nhất, giúp mã nguồn trở nên dễ đọc và dễ hiểu hơn.

- https://www.w3schools.com/REACT/react_jsx.asp
- https://react.dev/learn/writing-markup-with-jsx

### ⭐1. Cách sử dụng JSX

Để tạo ra một câu Hello world bằng HTML

```html
<h1 class="greeting">Hello, world!</h1>
```

Trong React bạn phải sử dụng phương thức JavaScript để tạo các phần tử HTML:

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

Cách viết này khá phức tạp và tồn thời gian để tạo ra một UI.
Thay vào đó người ta phát triển ra một thư viện giúp bạn đơn giản hóa hơn cách code đó là JSX.

JSX giúp bạn tạo ra các elements trong javascript như code bên HTML thuần túy

Mở file index.js/index.ts trong thư mục src

```js
//html 1 dòng
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
//Chèn khối HTML lớn
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

Khi ứng dụng chạy thì JSX được biên dịch ngược lại cú pháp của javascript như ví dụ trên.

Bạn có thể render ra giao diện người dùng

```js
ReactDOM.createRoot(document.getElementById('root')!).render(
  element,
)
```

```js
//Biểu thức trong JSX
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;

const element = <a href="https://www.reactjs.org"> link </a>;

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
```

### ⭐ 2. Một số ưu điểm của JSX trong ReactJs

- Dễ đọc và dễ viết: Cú pháp giống HTML giúp viết các thành phần React một cách dễ dàng và tự nhiên.
- Tích hợp JavaScript: Có thể sử dụng các biểu thức JavaScript để tích hợp logic vào trong mã JSX.
- Tối ưu hóa mã: JSX giúp viết mã gọn gàng và tổ chức tốt hơn, dễ dàng bảo trì và phát triển

### ⭐3. Mốt số lưu ý trong JSX ?

### 3.1. Luôn trả lại một một Root element

hay còn gọi là container tag

Trả về nhiều dòng --> đặt chúng trong một thẻ cha

```js
return <div>... .... ....</div>;
```

#### 3.2. Đóng tất cả các thẻ

Các thẻ standalone như `<img>` `<input>` thì buộc phải đóng lại như sau `<img />`, `<input />`

#### 3.3. Sử dụng cú pháp camelCase trong tất cả mọi trường hợp

- class ==> className
- JSX Style:
  - background-image ==> backgroundImage
  - background-color ==> backgroundColor

### ⭐ 4.Converting HTML to JSX

Html

```js
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
```

JSX

```js
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    />
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}
```

### ⭐ 5. Comment strong JSX

```js
let elements =  (
    <div>
      <!-- This doesn't work! -->
      {/* A JSX comment */}


      {/*
        Multi
        line
        comment
      */}

    </div>
);

```

### ⭐ 6. JavaScript in JSX with Curly Braces

Doc: <https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces>

Bằng cách sử dụng cặp dấu ngoặc nhọn {...}, bạn có thể sử dụng cú pháp Javascript bên trong nó.

```js
const name = "Lionel Messi";
let myElement = <h1>Xin chào {name} !</h1>;
```

Như vậy bạn có thể sử dụng BIẾN ngay trong HTML với hỗ trợ của JSX.

#### **❓ 6.1 Cặp dấu {...} được sử dụng ở đâu ?**

Bạn có thể sử dụng {...} với 2 cách trong JSX:

1. Như là text trực tiếp giữa một thẻ JSX
2. Nằm sau dấu =, làm giá trị của một thuộc tính ví dụ như: src={avatar}

```js
const avatar = '';
// {avatar} là một biến
<img src={avatar} alt="avatar" />
//Trường hợp dưới đây {avatar} được hiểu là một chuổi
<img src="{avatar}" alt="avatar" />
```

#### ❤️ 6.2 Sử dụng “double curlies” {{...}}

**🔹 inline CSS**

```js
let Courses = (
  <ul
    style={{
      backgroundColor: "black",
      color: "pink",
    }}
  >
    <li>Javascript</li>
    <li>React JS</li>
    <li>Node JS</li>
  </ul>
);
```

Thì ở đây Css Inline là một Object với các properties của CSS thì chuyển qua dạng camelCase nếu nó có 2 từ trở lên.

> background-color ==> backgroundColor

**🔹JavaScript Objects**

```js
const subject = {
  name: "ReactJS Basic",
  room: "Lab 1",
  address: "38 Yen Bai",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};
let Courses = (
  <div style={subject.theme}>
    <h1>{subject.name}</h1>
    <ul>
      <li>Room: {subject.room}</li>
      <li>Address: {subject.address}</li>
    </ul>
  </div>
);
```

---

## 🔥 Sử dụng các Font trong React

## 🌻 Embed icon Font React

- React Icons <https://react-icons.github.io/react-icons>

```bash
npm i react-icons
yarn add react-icons
```

Usage:

```js
/*
Để lấy cùng lúc nhiều icon, thì cách nhau = dấu phẩy
*/
import { FaBeer, FaHeart } from 'react-icons/fa';

function MyComponent() {
  render() {
    return <h3> Lets go for a <FaBeer />? I am Love  <FaHeart /> Beer </h3>
  }
}
```

- Font Awesome: <https://docs.fontawesome.com/web/use-with/react/>

## 🌻 Chèn hình vào React

Bước 1: Lưu tất cả hình vào một folder `images` trong thư mục public

Bước 2: Cách sử dụng hình

```jsx
<img src="./images/ten-hinh.png" alt="" />
```

Khi ứng dụng chạy thì thư mục public là thư mục gốc

Hoặc với cách sau

```jsx
//Import dưới dạng biến images
import images from "./images/ten-hinh.png";
<img src={images} alt="" />;
```

Nếu sử dụng với React Vite bạn cần cấu hình thêm `vite.config.ts`

```ts
//Sửa hàm defineConfig thành như sau
export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
  plugins: [react()],
});
```

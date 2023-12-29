# React Router

Giúp bạn tạo ra một dự án website bằng React có nhiều trang nội dung như HTML

## Thêm React Router vào dự án

```bash
npm i -D react-router-dom
yarn add -D react-router-dom
```

## Ý tưởng sitemap

Ví dụ bạn muốn khi URL:

- / thì hiển thị trang chủ
- /blog thì hiển thị trang blog
- /products thì hiển thị danh sách sản phẩm

## Tổ chức cấu trúc thư mục tương ứng với từng trang

1. Tạo một folder pages, trong thư mục src
2. Tạo các Component Page tương ứng cho từng trang và đặt vào trong thư mục pages

```js

src/
├─ pages/
│  ├─ HomePage.js
│  ├─ BlogPage.js
│  ├─ ProductPage.js
│  ├─ NoPage.js

```

## Cấu hình Routes

Tại component App

```js
//App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Giải thích:

- / => Load nội dung HomePage lên
- blog : Load nội dung trang BlogPage lên
- `*` : Không tìm thấy url khớp với ruote thì load NoPage lên

## Layout

Qua ví dụ trên thì các bạn nhận thấy, thực tế có các trang sẽ chung nhau một cấu trúc chung là Header và Footer. Chỉ khác nhau phần Body.

Khi đó React cho phép chúng ta dùng Layout để chứa phần thông tin Chung giữa các Pages

Tạo một folder src/layouts

```js
//Tạo file Layout.js:
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {" "}
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
```

Khi đã dùng React Route rồi thì để chuyển trang phải dùng đến component `Link` của `react-router-dom`

Khi đó bạn sửa App lại thành như sau

```js
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} >
            <Route path="blog" element={<BlogPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

Tất cả các trang sẽ bọc trong Route sử dụng Layout chung.

Trang nào bạn không muốn dùng Layout thì đặt Route đó ra ngoài Route Layout

## Parameter & Query String

### Parameter

**Parameter** là phần thông tin đường dẫn URL nằm sau Domain ví dụ như:

Ví dụ bạn muốn URL chi tiết 1 sản phẩm có ID = 4:

> /products/4

Để lấy được phân thông tin này ta làm như sau:

Khai báo thêm một Route ở App

```js
<Route path="product/:id" element={<ParameterPage />} />
```

- Khi đó biến `id` chính = con số 4 ở trên URL trình duyệt

> /products/my-string

- Nếu bạn truyền vào là chuỗi như trên thì `id` = `my-string`

> Lưu ý: Kể từ react-router-dom V6, không còn hỗ trợ Regular expression nữa

Để lấy được số 4 ở URL ta làm cần sử dụng hook `useParams` từ thư viện `react-router-dom`

```js
import { useParams } from "react-router-dom";

const ParameterPage = () => {
  let params = useParams();
  console.log(params);
  //output {id: 4}
  return (
    <div>
      <h1>ParameterPage</h1>
    </div>
  );
};

export default ParameterPage;
```

---

### Query String

**Query String** là phần thông tin nằm sau dấu chấm hỏi ? trên URL trình duyệt

Ví dụ bạn muốn phân trang sản phẩm với url: products?page=2

Để lấy được phân thông tin page=2 từ URL này ta làm như sau:

Sử dụng hook `useSearchParams` từ thư viện `react-router-dom`

```js
import { useLocation, useSearchParams } from "react-router-dom";

function QueryPage() {
  let location = useLocation();
  let [params] = useSearchParams();

  let page = params.get("page");

  console.log(location);
  console.log(page);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}

export default QueryPage;
```

## Nested Routes

Ở ví dụ trên chúng ta có /blog là đến trang Blog.

Bấy giờ mở rộng thêm kiểu như sau

```code
"/blog" --> posts list
"/blog/new" --> create new post
"/blog/123" -->  a post detail
```

Khi đó chúng ta có Route như sau:

```js
<Route path="blog" element={<Blog />}>
  <Route path="new" element={<NewPost />} />
  /*A nested route!*/
  <Route path=":postId" element={<Post />} />
</Route>
/*A nested route!*/
```

Route có path blog có 2 Route con ==> gọi là Nested route (Route lồng vào nhau)

## Chuyến hướng giữa các Routes

Để chuyến hướng giữa các routes sử dụng

```js
import { useNavigate } from "react-router-dom";
//
const navigate = useNavigate();
navigate("/login");
```

## SEO and Metadata

React là một ứng dụng **Single Page Application** với cơ chế Client Side Rendering

Làm thế nào để bạn có thể thay đổi thông tin title, metadata để SEO ?

Thư viện sau giúp chúng ta làm được điều đó

```bash
yarn add react-helmet
# Với TypeScript cần cài thêm
yarn add -D @types/react-helmet
```

Cách sử dụng

HomePage

```tsx
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta name="description" content="Learn React at Softech Aptech" />
      </Helmet>
      <h1 className="py-5">Home Page</h1>
    </>
  );
};

export default Home;
```

Với Social Metadata

## Multi Layout

Một dự án thực tế các Pages sẽ có nhiều dạng layout khác nhau

- Page thì có cả header, footer
- Page thì chỉ có header
- Page thì không có header và footer

Vậy làm thế nào bạn có thể tạo ra tùy chọn Layout riêng cho từng Page theo ý muốn ?

### Step 1 - Chuyển danh sách các Routes thành một mảng

```js
import Home from "../pages/Home";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Customers from "../pages/Customers";
import CustomerProfile from "../pages/Customers/CustomerProfile";
import CustomerOrders from "../pages/Customers/CustomerOrders";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import EmptyLayout from "../components/Layouts/EmptyLayout";
import OnlyHeaderLayout from "../components/Layouts/OnlyHeaderLayout";

interface Routes {
  id: number;
  path: string;
  element: () => JSX.Element;
  layout?: () => JSX.Element;
}

//Public routes

const publicRoutes: Routes[] = [
  { id: 1, path: "/", element: Home },
  { id: 2, path: "/product", element: Product },
  { id: 3, path: "/product/:id", element: ProductDetails },
  { id: 4, path: "/category", element: Category },
  { id: 5, path: "/login", element: Login, layout: EmptyLayout },
  { id: 6, path: "/customers", element: Customers, layout: OnlyHeaderLayout },
  {
    id: 7,
    path: "/customers/profile",
    element: CustomerProfile,
    layout: OnlyHeaderLayout,
  },
  {
    id: 8,
    path: "/customers/orders",
    element: CustomerOrders,
    layout: OnlyHeaderLayout,
  },
];

//Private routes
const privateRoutes: Routes[] = [];

export { publicRoutes, privateRoutes };
```

### Step 2 - Cấu hình Route trong App

```js
//App.js
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./data/routesList";
import DefaultLayout from "./components/Layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => {
          const Page = route.element;
          const Layout = route.layout ? route.layout : DefaultLayout;

          return (
            <>
              <Route key={route.id} path={route.path} element={<Layout />}>
                <Route index element={<Page />} />
              </Route>
            </>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Tại dòng

```js
const Layout = route.layout ? route.layout : DefaultLayout;
```

Khi bạn định nghĩa Layout riêng thì nó lấy Layout đó, còn không thì nó lấy Layout mặc định chung.

## Private Routes

Có nghĩa là có một số Routes các bạn không muốn public cho người khác xem. Mà chỉ có người nào có quyền truy cập mới xem được.

Tham khảo:

- <https://www.robinwieruch.de/react-router-private-routes/>
- <https://ui.dev/react-router-protected-routes-authentication>

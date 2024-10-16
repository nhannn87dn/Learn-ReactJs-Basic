# React Router

Giúp bạn tạo ra một dự án website bằng React có nhiều trang nội dung như HTML

## 🔥 Thêm React Router vào dự án

```bash
npm i -D react-router-dom
yarn add -D react-router-dom
```

## 🔥 Ý tưởng sitemap

Ví dụ bạn muốn khi URL:

- / thì hiển thị trang chủ Dashboard
- /categories thì hiển thị trang quản lý danh mục
- /productss thì hiển thị trang quản lý sản phẩm

## Tổ chức cấu trúc thư mục tương ứng với từng trang

1. Tạo một folder pages, trong thư mục src
2. Tạo các Component Page tương ứng cho từng trang và đặt vào trong thư mục pages

```js

src/
├─ pages/
│  ├─ DashboardPage.js
│  ├─ CategoryPage.js
│  ├─ ProductPage.js
│  ├─ NoPage.js

```

## 🔥 Cấu hình Routes

Tại component App

```js
//App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="blog" element={<CategoryPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Giải thích:

- / => Load nội dung DashboardPage lên
- blog : Load nội dung trang CategoryPage lên
- `*` : Không tìm thấy url khớp với ruote thì load NoPage lên

## 🔥 Layout

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
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
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

Đọc thêm: [Multi Layout](Multi-Layout-React.md)

Khi đã dùng React Route rồi thì để chuyển trang phải dùng đến component `Link` của `react-router-dom`

Khi đó bạn sửa App lại thành như sau

```js
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<DashboardPage />} >
            <Route path="categories" element={<CategoryPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

Tất cả các trang sẽ bọc trong Route sử dụng Layout chung.

Trang nào bạn không muốn dùng Layout thì đặt Route đó ra ngoài Route Layout

## 🔥 Parameter & Query String

### Parameter

**Parameter** là phần thông tin đường dẫn URL nằm sau Domain ví dụ như:

Ví dụ bạn muốn URL chi tiết 1 sản phẩm có ID = 4:

> /productss/4

Để lấy được phân thông tin này ta làm như sau:

Khai báo thêm một Route ở App

```js
<Route path="products/:id" element={<ParameterPage />} />
```

- Khi đó biến `id` chính = con số 4 ở trên URL trình duyệt

> /productss/my-string

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

## 🔥 Nested Routes

Bấy giờ mở rộng thêm kiểu như sau

```code
"settings"
"settings/commons"
"settings/display"
```

Khi đó chúng ta có Route như sau:

```js
<Route path="settings" element={<Settings />}>
  <Route path="commons" element={<Commons />} />
  /*A nested route!*/
  <Route path="display" element={<Display />} />
</Route>
/*A nested route!*/
```

Route có path `settings` có 2 Route con ==> gọi là Nested route (Route lồng vào nhau)

## 🔥 Chuyến hướng giữa các Routes

Để chuyến hướng giữa các routes sử dụng

```js
import { useNavigate } from "react-router-dom";
//
const navigate = useNavigate();
navigate("/login");
```

## 🔥 SEO and Metadata

React là một ứng dụng **Single Page Application** với cơ chế Client Side Rendering

Làm thế nào để bạn có thể thay đổi thông tin title, metadata để SEO ?

Thư viện sau giúp chúng ta làm được điều đó

```bash
yarn add react-helmet
# Với TypeScript cần cài thêm
yarn add -D @types/react-helmet
```

Cách sử dụng

DashboardPage

```tsx
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard Page</title>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta name="description" content="Learn React at Softech Aptech" />
      </Helmet>
      <h1 className="py-5">Dashboard Page</h1>
    </>
  );
};

export default Dashboard;
```

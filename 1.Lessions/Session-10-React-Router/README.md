# Giới thiệu về React Router

## React Router là gì?

`react-router` là một thư viện phổ biến và mạnh mẽ trong hệ sinh thái React, cho phép bạn **quản lý định tuyến (routing)** trong ứng dụng React của mình.

**Vậy định tuyến là gì?**
Hãy tưởng tượng bạn đang duyệt một trang web truyền thống. Khi bạn click vào một liên kết, trình duyệt sẽ tải lại toàn bộ trang mới. Trong một ứng dụng React SPA, điều này không xảy ra. Khi bạn di chuyển giữa các "trang" (thực chất là các component khác nhau), trình duyệt không tải lại toàn bộ trang. Thay vào đó, `react-router` sẽ giúp bạn:

* **Thay đổi URL** trên thanh địa chỉ của trình duyệt.
* **Hiển thị các component React khác nhau** tương ứng với URL đó.
* **Cập nhật giao diện** một cách linh hoạt mà không cần tải lại toàn bộ trang.

Nói cách khác, `react-router` giúp ứng dụng SPA của bạn "giả vờ" như một ứng dụng đa trang truyền thống, mang lại trải nghiệm người dùng liền mạch và nhanh chóng.

## 🔥 Tại sao chúng ta cần React Router?

* **Tạo ra các "trang" khác nhau:** Ứng dụng thực tế cần nhiều màn hình (ví dụ: Trang chủ, Giới thiệu, Sản phẩm, Liên hệ). `react-router` giúp bạn ánh xạ mỗi URL đến một component cụ thể.
* **Trải nghiệm người dùng tốt hơn:** Thay vì tải lại toàn bộ trang, chỉ phần nội dung cần thiết được cập nhật, mang lại cảm giác mượt mà và nhanh chóng.
* **SEO và Bookmark:** Cho phép người dùng bookmark các URL cụ thể hoặc các công cụ tìm kiếm index các "trang" khác nhau của ứng dụng bạn.
* **Quản lý lịch sử trình duyệt:** Bạn có thể sử dụng nút quay lại/tiến lên của trình duyệt để điều hướng trong ứng dụng.

## 🔥 Thêm React Router vào dự án

```bash
npm i -D react-router
yarn add -D react-router
pnpm add -D react-router
```

## 🔥 Ý tưởng sitemap

Ví dụ bạn muốn khi URL:

* `/` thì hiển thị trang chủ Dashboard
* `/categories` thì hiển thị trang quản lý danh mục
* `/productss` thì hiển thị trang quản lý sản phẩm

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
import { BrowserRouter, Routes, Route } from "react-router";

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

* / => Load nội dung DashboardPage lên
* blog : Load nội dung trang CategoryPage lên
* `*` : Không tìm thấy url khớp với ruote thì load NoPage lên

## 🔥 Layout

Qua ví dụ trên thì các bạn nhận thấy, thực tế có các trang sẽ chung nhau một cấu trúc chung là Header và Footer. Chỉ khác nhau phần Body.

Khi đó React cho phép chúng ta dùng Layout để chứa phần thông tin Chung giữa các Pages

Tạo một folder src/layouts

```js
//Tạo file Layout.js:
import { Outlet, Link } from "react-router";

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

Khi đã dùng React Route rồi thì để chuyển trang phải dùng đến component `Link` của `react-router`

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

* Khi đó biến `id` chính = con số 4 ở trên URL trình duyệt

> /productss/my-string

* Nếu bạn truyền vào là chuỗi như trên thì `id` = `my-string`

> Lưu ý: Kể từ react-router V6, không còn hỗ trợ Regular expression nữa

Để lấy được số 4 ở URL ta làm cần sử dụng hook `useParams` từ thư viện `react-router`

```js
import { useParams } from "react-router";

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

Sử dụng hook `useSearchParams` từ thư viện `react-router`

```js
import { useLocation, useSearchParams } from "react-router";

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
import { useNavigate } from "react-router";
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

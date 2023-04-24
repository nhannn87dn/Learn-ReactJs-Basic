# React Router

## Thêm React Router vào dự án

```bash
npm i -D react-router-dom
```

## Tổ chức cấu trúc thư mục

```js
/*
1. Tạo một folder pages, trong thư mục src
2. Tạo các Component layout tương ứng cho từng route và đặt vào trong thư mục pages
*/
src/
├─ pages/
│  ├─ Layout.js
│  ├─ Home.js
│  ├─ Blog.js
│  ├─ Contact.js

```

## Cách Route hoạt động

```js
//App.js

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/parameter/:id/:name' element={<Parameter />} />
          <Route path='/search' element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```
Giải thích:

* / => Load nội dung Layout lên và tất cả những route nào nằm là con của route này sẽ có chung 1 Layout.
* index: nó là trang mặc định
* blogs : Load nội dung trang Blog lên
* /parameter/:id/:name => route động, :id và :name là một biến
*  `*` : Không tìm thấy url khớp với ruote thì load NoPage lên



## Layout

```js
//Layout.js:
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/parameter/145236/peter">Parameter</Link>
          </li>
          <li>
            <Link to="/search?name=Tony&age=27">Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
```

Khi đã dùng React Route rồi thì để chuyển trang phải dùng đến component Link của `react-router-dom`

## Parameter & Query String

**Parameter** là phần thông tin đường dẫn URL nằm sau Domain ví dụ như:

```code
parameter/145236/peter
```

Để lấy được phân thông tin này ta làm như sau:

```js
import {useParams} from 'react-router-dom';

const ParameterPage = () => {
    let params = useParams();
    console.log(params);
  return (
    <div>
       <h1>ParameterPage</h1>
        </div>
  )
}

export default ParameterPage
```

Sử dụng hook `useParams` từ thư viện `react-router-dom`

---

**Query String** là phần thông tin nằm sau dấu chấm hỏi ? trên URL trình duyệt

```code
search?name=Tony&age=27
```
Để lấy được phân thông tin này ta làm như sau:

```js
import { useLocation, useSearchParams } from 'react-router-dom';

function QueryPage() {
  let location = useLocation();
  let [params] = useSearchParams();

  let name = params.get('name');
  let age = params.get('age');

  console.log(location);
  console.log(name, age);

  return <div>
     <h1>Search Page</h1>
  </div>;
}

export default QueryPage;
```

Sử dụng hook `useSearchParams` từ thư viện `react-router-dom`

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
<Route path='blog' element={<Blog />}>
  <Route path='new' element={<NewPost />} />
  /*A nested route!*/
  <Route path=':postId' element={<Post />} />  
</Route>
/*A nested route!*/
               
```

Route có path blog có 2 Route còn ==> gọi là Nested route
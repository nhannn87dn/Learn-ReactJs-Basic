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

## Parameter & Query String

-- parameter/145236/peter
-- /search?name=Tony&age=27
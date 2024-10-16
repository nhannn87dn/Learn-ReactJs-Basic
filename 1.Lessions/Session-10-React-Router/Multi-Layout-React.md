# Multi Layout

Một dự án thực tế các Pages sẽ có nhiều dạng layout khác nhau

- Page thì có cả header, footer
- Page thì chỉ có header
- Page thì không có header và footer

Vậy làm thế nào bạn có thể tạo ra tùy chọn Layout riêng cho từng Page theo ý muốn ?

### Step 1 - Chuyển danh sách các Routes thành một mảng

```js
import Dashboard from "../pages/Dashboard";
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
  { id: 1, path: "/", element: Dashboard },
  { id: 2, path: "/products", element: Product },
  { id: 3, path: "/products/:id", element: ProductDetails },
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

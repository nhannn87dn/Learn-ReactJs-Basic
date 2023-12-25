import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/ProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NoPage from "./pages/NoPage";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import CustomersPage from "./pages/CustomerDashboardPage";
import CustomerLayout from "./pages/layouts/CustomerLayout";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import CustomerOrdersPage from "./pages/CustomerOrdersPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

// Create a client
const queryClient = new QueryClient();

/**
 * App --> ko được gọi là hàm trong React
 * ==> gọi là Function Component
 */
function App() {
  console.log("App render");

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Liệt kê ra các định nghĩa routes */}

          {/* Được hiểu các Route bên trong sử dụng chung 1 layout = DefaultLayout */}
          <Route path="/" element={<DefaultLayout />}>
            {/* / Trang chủ */}
            <Route index element={<HomePage />} />
            {/*
                    path: là đường dẫn 
                    element: là một component, nội dung hiển thị cho path đó
                    */}
            {/* / Trang Blog */}
            <Route path="blog" element={<BlogPage />} />
            {/* / Trang Products */}
            <Route path="products" element={<ProductPage />} />

            <Route path="customers/" element={<CustomerLayout />}>
              <Route path="dashboard" element={<CustomerDashboardPage />} />
              <Route path="profile" element={<CustomerProfilePage />} />
              <Route path="orders" element={<CustomerOrdersPage />} />
            </Route>

            {/* 
            URL động
             - /blog/khuyen-mai-mung-giang-sinh-happy-new-year-2021
             - /blog/thiet-ke-website-da-nang-chuan-seo
             - /blog/SLUG_URL
              SLUG_URL ==> động, luôn thay đổi và bạn không thể dự đoán
              trước được độ dài và nó có kí tự gì 
              ==> Để bắt được URL động đó ==> Parameter
              - slug = khuyen-mai-mung-giang-sinh-happy-new-year-2021
              - slug = thiet-ke-website-da-nang-chuan-seo
             */}
            {/* <Route path="blog/:slug" element={<BlogDetailsPage />} /> */}
            {/* Sử dụng regular expression */}
            <Route path="blog/:slug" element={<BlogDetailsPage />} />
            {/* 
                Để cover được những trang nào chưa định nghĩa Route
                Thì chúng ta một khái niệm là Page Not Found 404
                * đại diện cho bất kì path nào không nằm trong các paths đã định nghĩa ở trên
                */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

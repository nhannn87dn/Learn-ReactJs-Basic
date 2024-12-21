import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomerPage from "./pages/CustomerPage";
import CustomerOrderPage from "./pages/CustomerOrderPage";
import CustomerLayout from "./layouts/CustomerLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
        path: là đường dẫn URL
        element: là component sẽ được hiển thị
         khi đường dẫn URL khớp với path
        */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          {/* --> Gọi là nested route */}
          <Route path="customer" element={<CustomerLayout />}>
            <Route index element={<CustomerPage />} />
            <Route path="orders" element={<CustomerOrderPage />} />
          </Route>
        </Route>

        {/* 
        - Dòng này phải đặt cuối cùng
        - Nếu mà không khớp với bất kỳ route nào ở trên
         thì sẽ hiển thị component NotFoundPage
         */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

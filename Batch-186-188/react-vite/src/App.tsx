import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import NoPage from "./pages/NoPage";
import DefaultLayout from "./layouts/DefaultLayout";
import GioiThieuPage from "./pages/GioiThieuPage";
import ProductDetails from "./pages/ProductDetails";
<<<<<<< HEAD
=======
import LoginPage from "./pages/LoginPage";
>>>>>>> a03215a3c2ae63bd44efff88246e53491ab9f157

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* 
          Cứ mỗi đường dẫn bạn tạo ra bạn phải định nghĩa route cho nó 
          path: là đường dẫn
          element: component mà bạn muốn gắn vào App khi có path tương ứng.
          */}
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/gioi-thieu.html" element={<GioiThieuPage />} />
<<<<<<< HEAD
=======
            <Route path="/login" element={<LoginPage />} />
>>>>>>> a03215a3c2ae63bd44efff88246e53491ab9f157
          </Route>

          {/* 
          Handle lỗi 404
          - Để cuối cùng trong danh sách định nghĩa route.
          - Khi mà không khớp với bất kỳ đường dẫn nào trên thì nó rơi vào 404
           */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

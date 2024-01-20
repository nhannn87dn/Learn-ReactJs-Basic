import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NoPage from "./pages/NoPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CustomerPage from "./pages/CustomerPage";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerOrders from "./pages/CustomerOrders";

// Create a client
const queryClient = new QueryClient();

function App() {
  console.log("App render");
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* 
          Cứ mỗi URL bạn cần định nghĩa 1 thẻ Route 
          Trong đó:
          - path: là đường dẫn URL
          - element là component bạn muốn hiển thị tương ứng với path
          */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            {/* 
            :slug ==> Đại diện cho phần chuỗi phía sau blog/
            */}
            <Route path="products" element={<ProductPage />} />
            {/* Nested Layout và route */}
            <Route path="customer" element={<CustomerPage />}>
              <Route path="/customer/profile" element={<CustomerProfile />} />
              <Route path="/customer/orders" element={<CustomerOrders />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

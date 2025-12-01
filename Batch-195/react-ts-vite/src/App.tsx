import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExampleReactQuery from "./components/ExampleReactQuery";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerOrder from "./pages/CustomerOrder";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerLayout from "./layouts/CustomerLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetail from "./pages/ProductDetail";

// Create a client
const queryClient = new QueryClient();

//component App
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* COMPONENTS NÀO SỬ DỤNG DỤNG REACT QUERY THÌ ĐẶT VÀO Ở GIỮA */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tin-tuc" element={<PostPage />} />s
            <Route path="product" element={<ProductPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="customer" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="order" element={<CustomerOrder />} />
              <Route path="profile" element={<CustomerProfile />} />
            </Route>
            {/* 404 notfound */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerOrder from "./pages/CustomerOrder";
import CustomerLayout from "./layouts/CustomerLayout";
import ProductDetail from "./pages/ProductDetail";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="customer/" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="profile" element={<CustomerProfile />} />
              <Route path="order" element={<CustomerOrder />} />
            </Route>
          </Route>
          {/* Dat o cuoi danh sach handle 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NoPage from "./pages/NoPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CustomerPage from "./pages/CustomerPage";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import CustomerOrdersPage from "./pages/CustomerOrdersPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import ChangleTitle from "./components/ChangleTitle";
//import Categories from "./components/Categories";
//import CategoriesAxios from "./components/CategoriesAxios";

const queryClient = new QueryClient();

function App() {
  console.log("app render");

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/customers" element={<CustomerPage />}>
              <Route index element={<CustomerDashboardPage />} />
              <Route
                path="/customers/profile"
                element={<CustomerProfilePage />}
              />
              <Route
                path="/customers/orders"
                element={<CustomerOrdersPage />}
              />
            </Route>
          </Route>
          {/* bao loi 404 */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

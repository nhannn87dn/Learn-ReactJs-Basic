import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./components/layouts/DefaultLayout";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { HelmetProvider } from "react-helmet-async";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            {/* Route động */}
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
          </Route>
        </Routes>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

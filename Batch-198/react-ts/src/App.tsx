import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Định 1 route bắt đầu từ đây */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

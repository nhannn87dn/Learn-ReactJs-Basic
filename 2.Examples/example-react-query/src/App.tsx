import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ProductPage from './pages/ProductPage';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            {/* Đặt dòng này cuối cùng */}
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App

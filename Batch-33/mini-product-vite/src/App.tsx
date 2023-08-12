import {useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ProductPage from './pages/ProductPage';
import NoPage from './pages/NoPage';
import CategoryPage from './pages/CategoryPage';
import Layout from './components/layouts/Layout';
import ProductDetail from './pages/ProductDetail';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import LoginPage from './pages/LoginPage';


// Create a client
const queryClient = new QueryClient()


function App() {

  console.log('App Render');

  return (
    <>
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
        <Routes>
        
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Đặt dòng này cuối cùng */}
                <Route path="*" element={<NoPage />} />
            </Route>
        
        </Routes>
     </BrowserRouter>
     </QueryClientProvider>
    </>
  )
}

export default App

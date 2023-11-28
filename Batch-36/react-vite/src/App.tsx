import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { DefaultLayout } from './components/layouts/DefaultLayout';
import NoPage from './pages/NoPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import { OnlyHeaderLayout } from './components/layouts/OnlyHeaderLayout';

// Create a client
const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
              {/* Dinh nghia layout dung chung cho all trang ben trong */}
              <Route path='/' element={<DefaultLayout />}>
                  {/* Dinh nghia duong dan cho trang Home */}
                  <Route index element={<HomePage />} />
                  {/* Dinh nghia duong dan cho trang Blog */}
                  <Route path='blog' element={<BlogPage />} />
                  <Route path='categories' element={<CategoryPage />} />
                  <Route path='product' element={<ProductPage />} />
                  {/* Dinh nghia mot URL Động với cú pháp :name */}
                  <Route path='blog/:id' element={<BlogDetailPage />} />

              </Route>
              {/* Dinh nghia rieng cho login mot layout khac */}
              <Route path='/login' element={<OnlyHeaderLayout />}>
                  <Route index element={<LoginPage />} />
              </Route>
                {/* Neu khong khop URL nao thi bo load page NoPage */}
              <Route path='*' element={<NoPage />} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

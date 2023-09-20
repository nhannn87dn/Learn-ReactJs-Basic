import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'
import Home from './pages/Home';
import Product from './pages/Product';
import NoPage from './pages/NoPage';
import Category from './pages/Category';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Customers from './pages/Customers';
import CustomerProfile from './pages/Customers/CustomerProfile';
import CustomerOrders from './pages/Customers/CustomerOrders';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
const queryClient = new QueryClient();


function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />}  />
            <Route path='product' element={<Product />}  />
            <Route path='product/:id' element={<ProductDetails />}  />
            <Route path='category' element={<Category />}  />
            <Route path='login' element={<Login />}  />
            {/* Nested Layout */}
            <Route path='customers' element={<Customers />}>
              <Route path='profile' element={<CustomerProfile />} />
              <Route path='orders' element={<CustomerOrders />} />
            </Route>
            {/* Nếu không tồn tại thì rơi vào route dưới */}
            <Route path='*' element={<NoPage />}  />
          </Route>
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App

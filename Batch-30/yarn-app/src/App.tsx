//import ProductPage from "./pages/ProductPage";
import React, {useCallback, useState, useMemo} from 'react';
import "./styles/global.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import ProductDetailPage from './pages/ProductDetailPage';
import DashboardPage from './pages/Dashboard';
import ProductAddPage from './pages/ProductAddPage';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/product/add' element={<ProductAddPage />} />
        <Route path='*' element={<NoPage />} />
    </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App;

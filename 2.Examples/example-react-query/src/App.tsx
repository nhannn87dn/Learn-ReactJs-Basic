import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './components/Products'
import AddProduct from './components/AddProduct'
const queryClient = new QueryClient();

import './App.css'

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      {/* Các thành phần con của bạn ở đây */}
      <Products />
      <AddProduct />
      </QueryClientProvider>
    </>
  )
}

export default App

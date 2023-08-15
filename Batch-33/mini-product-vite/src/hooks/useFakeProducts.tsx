import { create } from 'zustand';

import axios from 'axios';

const apiUrl = 'https://api.escuelajs.co/api/v1/products';

interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: {
        id: number;
        name: string;
        image: string;
    };
  }
  

interface FakeProducts {
    products: Product[];
    isLoading: boolean;
    error: string;
    fetchProducts: ()=> void,
    filterProducts: (id:number)=> void
}

const useFakeProducts = create<FakeProducts>((set) => ({
  products: [],
  isLoading: false,
  error: '', // Trạng thái lưu trữ thông báo lỗi

  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: '' });
      const response = await axios.get(`${apiUrl}`);
      set({ products: response.data, isLoading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ isLoading: false, error: 'Error fetching products' });
    }
  },
  filterProducts: async (id:number) => {
    try {
      set({ isLoading: true, error: '' });
      const response = await axios.get(`${apiUrl}/?categoryId=${id}`);
      set({ products: response.data, isLoading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ isLoading: false, error: 'Error fetching products' });
    }
  },
 
  
}));

export default useFakeProducts;
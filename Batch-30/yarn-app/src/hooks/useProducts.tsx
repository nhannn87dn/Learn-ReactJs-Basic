import {create} from 'zustand';

interface ProductType  {
    createdAt: string
    name: string
    thumbnail: string;
    price: string;
    salePrice: string;
    category: number;
    id: string;
}



interface TypeState {
    products: ProductType[] | null;
    setProducts: (list: ProductType[]) => void;
    category: number; //All danh mục
    filterCategory: (id: number) => void
  }
  
  export const useProducts = create<TypeState>((set,get) => ({
     products: null,
     category: 0,
     filterCategory: (id) => set({category: id}),
     setProducts: (list) => set({products: list})
  }));
  
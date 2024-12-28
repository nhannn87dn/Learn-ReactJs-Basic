import { create } from "zustand";

interface IProduct {
  id: number;
  title: string;
  price: number;
}
interface ProductStore {
  products: IProduct[];
  isLoading: boolean;
  err: string | null;
  fetchProducts: () => void;
}
//Tạo Store PRoduct dùng chung

export const useProduct = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  err: null,
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      if (response.status === 200) {
        set({ products: data, isLoading: false, err: null });
      } else {
        set({ isLoading: false, err: "Loi goi API" });
      }
    } catch (error: any) {
      set({ isLoading: false, err: error?.message });
    }
  },
}));

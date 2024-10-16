import axios from "axios";
import { create } from "zustand";

type TProducts = {
  title: string;
  price: number;
};
type TStoreProduct = {
  products: TProducts[];
  isLoading: boolean;
  err: string | null;
  fetchProducts: () => void;
};
//1.Tạo store
export const useProducts = create<TStoreProduct>((set) => ({
  products: [],
  isLoading: false,
  err: null,
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      set({ products: response.data, isLoading: false });
    } catch (error: any) {
      set({ isLoading: false, err: error.message });
    }
  },
}));

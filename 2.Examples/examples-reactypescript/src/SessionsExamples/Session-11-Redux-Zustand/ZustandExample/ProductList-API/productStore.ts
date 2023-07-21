// productStore.ts
import create, { SetState } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  // Thêm các thuộc tính khác của sản phẩm tùy ý
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: (categoryId: number) => Promise<void>;
  filterProductsByPrice: (price: number) => Promise<void>;
}

const useProductStore = create<ProductState>((set: SetState<ProductState>) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async (categoryId) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );
      const data = await response.json();
      set({ products: data, loading: false, error: null });
    } catch (error) {
      set({ products: [], loading: false, error: error.message });
    }
  },
  filterProductsByPrice: async (price) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/price=${price}`
      );
      const data = await response.json();
      set({ products: data, loading: false, error: null });
    } catch (error) {
      set({ products: [], loading: false, error: error.message });
    }
  },
}));

export default useProductStore;

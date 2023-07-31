// productStore.js
import create from 'zustand';

const useProductStore = create((set) => ({
  //state product khởi tạo
  products: [],
  loading: false,
  error: null,
  //Lấy danh sách sản phẩm lần đầu
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
  //Lọc theo giá
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

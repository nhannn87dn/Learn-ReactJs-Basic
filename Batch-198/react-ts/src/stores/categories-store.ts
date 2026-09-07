import { create } from "zustand";

type TCategory = {
  id: number;
  name: string;
};

interface ICategoryStore {
  categories: TCategory[];
  getCategories: () => void;
}

export const useCategoryStore = create<ICategoryStore>((set) => ({
  categories: [],
  // Hàm để lấy danh sách danh mục từ API
  getCategories: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      //Sau khi lấy được dữ liệu thì cập nhật cho state categories
      set({ categories: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },
}));

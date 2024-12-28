import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CountStore {
  count: number;
  tang: () => void;
  giam: () => void;
}
// Khởi tạo Store, và export để dùng trong các component
export const useCountLocalStorage = create(
  persist<CountStore>(
    (set, get) => ({
      //Khai báo state trong này
      count: 0, // state chính
      tang: () => set((state) => ({ count: state.count + 1 })), // phương thức để thay đổi state
      giam: () => set((state) => ({ count: state.count - 1 })),
      increase: () => set({ count: get().count + 1 }),
    }),
    {
      name: "count-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // sessionStorage / localStorage
    }
  )
);

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
//Cách định nghĩa 1 store
interface ICountStore {
  count: number;
  setCount: () => void;
}
//Tạo một hook
export const useCountStore = create(
  persist<ICountStore>(
    (set) => ({
      count: 0, //giá trị khởi tạo của state count
      //phương thức để thay đổi state count
      setCount: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "app-count", // Tên key trong localStorage (hoặc storage khác)
      storage: createJSONStorage(() => localStorage), // (Tùy chọn) Chỉ định loại storage
      // Mặc định là localStorage nếu không chỉ định
    }
  )
);

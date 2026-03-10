import { create } from "zustand";

//b3. Cấu hình typescript cho store
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

//b1. tạo một hàm bắt đầu bằng từ use
//ngoài ra useCount được gọi một custom hook
export const useCount = create<CountState>((set) => ({
  count: 0, //state
  //b2. tạo các hàm để thay đổi state
  //dùng phương thức set để thay đổi state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

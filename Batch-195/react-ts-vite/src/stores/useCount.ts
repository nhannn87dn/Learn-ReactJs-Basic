import { create } from "zustand";

/* đặt 1 arrow function
có tên bắt đầu = use
*/

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = create<CountState>((set) => ({
  count: 0, //state count
  //có thêm các phương thức để thay đổi state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

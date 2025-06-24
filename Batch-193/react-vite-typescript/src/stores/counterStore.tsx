import { create } from "zustand";

//Cách định nghĩa 1 store
interface ICountStore {
  count: number;
  setCount: () => void;
}
//Tạo một hook
export const useCountStore = create<ICountStore>((set) => ({
  count: 0, //giá trị khởi tạo của state count
  //phương thức để thay đổi state count
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));

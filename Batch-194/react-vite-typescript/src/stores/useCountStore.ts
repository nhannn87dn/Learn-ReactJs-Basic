import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICountStore {
  count: number;
  setCount: () => void;
}

export const useCountStore = create(
  devtools<ICountStore>((set) => ({
    //khai bao state o day
    count: 0,
    setCount: () => set((state) => ({ count: state.count + 1 })),
  }))
);

import { create } from "zustand";

type CountState = {
  count: number;
  setCount: () => void;
};
//kho chung
export const useCount = create<CountState>((set) => ({
  count: 0, //state
  //method update state
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));

// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

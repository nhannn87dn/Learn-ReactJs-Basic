import { create } from 'zustand'

//Định nghĩa typescript cho Store
type CountType = {
  count: number,
  increase: ()=> void,
  decrease: ()=> void
}

export const useCount = create<CountType>((set) => ({
  count: 0, //state count, giá trị khởi tạo 0
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

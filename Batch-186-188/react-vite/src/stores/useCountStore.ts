import { create } from "zustand";

// let obj = {
//     count: 0
// }
//ES6
//obj = {...obj, count: 1}
/* tao ra mot hook */

type TCountStore = {
  count: number;
  updateCount: () => void;
  changeCount: () => void;
  oldCount: () => void;
};

export const useCountStore = create<TCountStore>((set, get) => ({
  //khai báo giá trị mặc định của state
  count: 0, //0 giá trị khởi tạo
  //Nếu thay đổi giá trị cũ = giá trị mới
  updateCount: () => set({ count: 10 }),
  //Nếu cần lấy giá trị cũ để cập nhật
  changeCount: () => set((state) => ({ count: state.count + 1 })),
  // Hoac cach thu 3 la dung get de lay gia tri cu
  oldCount: () => set({ count: get().count + 1 }),
}));

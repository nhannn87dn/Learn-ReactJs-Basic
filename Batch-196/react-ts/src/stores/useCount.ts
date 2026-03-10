import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

//b3. Cấu hình typescript cho store
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  doGet: () => void;
  login: (email: string, password: string) => Promise<void>;
  user: null | {
    access_token: string;
    refresh_token: string;
  };
}

//b1. tạo một hàm bắt đầu bằng từ use
//ngoài ra useCount được gọi một custom hook
export const useCount = create<CountState>()(
  devtools(
    persist(
      (set, get) => ({
        count: 0, //state
        //b2. tạo các hàm để thay đổi state
        //dùng phương thức set để thay đổi state
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        doGet: () => {
          //Muốn lấy giá trị hiện tại của count
          const currentCount = get().count;
          console.log("Current count:", currentCount);
        },
        user: null,
        login: async (email: string, password: string) => {
          try {
            const res = await axios.post(
              "https://api.escuelajs.co/api/v1/auth/login",
              {
                email,
                password,
              },
            );
            console.log(res.data);
            //
            set({ user: res.data });
          } catch (error) {
            console.log(error);
          }
        },
      }),
      {
        name: "count-store",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

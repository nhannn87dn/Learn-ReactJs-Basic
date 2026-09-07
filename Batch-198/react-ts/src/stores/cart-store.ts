import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  totalItems: number; // Số lượng sản phẩm trong giỏ hàng
  setTotalItems: (n: number) => void; // Hàm để cập nhật số lượng sản phẩm trong giỏ hàng
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      totalItems: 0,
      setTotalItems: (n) =>
        set((state) => ({ totalItems: state.totalItems + n })),
    }),
    {
      name: "batch-198-cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

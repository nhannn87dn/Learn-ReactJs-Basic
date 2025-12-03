import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  //discount: number;
  image: string;
  quantity: number; //số lượng sp
}

interface ICartStore {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}
export const useCart = create(
  devtools(
    persist<ICartStore>(
      (set) => ({
        products: [],

        // 1. Thêm sản phẩm vào giỏ hàng
        addProduct: (product: IProduct) =>
          set((state) => {
            const existing = state.products.find((p) => p.id === product.id);
            if (existing) {
              return {
                products: state.products.map((p) =>
                  p.id === product.id
                    ? { ...p, quantity: p.quantity + product.quantity }
                    : p
                ),
              };
            }
            return { products: [...state.products, product] };
          }),

        // 2. Xóa sản phẩm khỏi giỏ hàng
        removeProduct: (productId: number) =>
          set((state) => ({
            products: state.products.filter((p) => p.id !== productId),
          })),

        clearCart: () =>
          set(() => ({
            products: [],
          })),

        // 3. Cập nhật số lượng
        updateProductQuantity: (productId: number, quantity: number) =>
          set((state) => ({
            products: state.products.map((p) =>
              p.id === productId ? { ...p, quantity } : p
            ),
          })),
      }),
      {
        name: "cart-storage-batch-195",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

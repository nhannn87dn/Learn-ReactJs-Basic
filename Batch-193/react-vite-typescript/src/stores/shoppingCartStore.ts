import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface IProduct {
  id: number;
  name: string;
  price: number;
}
interface ICartStore {
  countNumber: number;
  products: IProduct[];
  addItemToCart: (product: IProduct) => void;
}
export const useShoppingCartStore = create(
  devtools(
    persist<ICartStore>(
      (set, get) => ({
        countNumber: 0, //sl sp trong giỏ hàng
        products: [], // danh sách sp đã chọn
        //code phương thức thêm sp vào giỏ hàng
        addItemToCart: (product: IProduct) => {
          //bổ sung sp mới vảo mảng đang có
          const products = [...get().products, product];
          //set lại state
          set({ products });
          //cập nhật lại số lượng  giỏ hàng
          set({ countNumber: products.length });
        },
      }),
      {
        name: "app-shopping-cart", // Tên key trong localStorage (hoặc storage khác)
        storage: createJSONStorage(() => localStorage), // (Tùy chọn) Chỉ định loại storage
        // Mặc định là localStorage nếu không chỉ định
      }
    )
  )
);

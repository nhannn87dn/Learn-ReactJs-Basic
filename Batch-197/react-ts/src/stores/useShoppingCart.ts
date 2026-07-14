import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

type TProduct = {
    id: number;
    title: string;
    price: number;
    quantity: number; // số lượng mua của 1 sp
}

type ShoppingCartState = {
    products: TProduct[]
    addToCart: (product: TProduct) => void //thêm sp vào giỏ hàng
    removeFromCart: (product: TProduct) => void // xoá sp khỏi giỏ hàng
}

export const useShoppingCartStore = create<ShoppingCartState>()(devtools(persist((set)=>{
    
    return {
        products: [], // một mảng sp, mặc định là rỗng
        addToCart: (product: TProduct) => set((state) => ({ products: [...state.products, product] })),
        removeFromCart: (product: TProduct) => set((state) => ({ products: state.products.filter((p: any) => p.id !== product.id) })),
    }
}, {
    name: 'shopping-cart', // đặt tên cho key trong local Storage
    storage: createJSONStorage(() => localStorage),
})))